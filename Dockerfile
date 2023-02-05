# * --------------> The build image
FROM node:16.13.0 AS build
# ARG NPM_TOKEN
WORKDIR /app
COPY package*.json /app/
# ----------------------------------
# ? If we have a private npm module we'd use the below command to use the npm token
# RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc && \
   # npm ci --only=production && \
   # rm -f .npmrc
# ----------------------------------
RUN npm ci --only=production
RUN rm -f .npmrc

# * --------------> The production image
# ! if running on (linux/amd64) use this immage to build
FROM node:lts-alpine@sha256:777b5a7bf0c40e37766ff8df382c900f16c688ed05ae3a72d32a26f3e9002cf9
# ! if running on (linux/arm64/v8) use this immage to build
# FROM arm64v8/node:lts-alpine@sha256:9aadc575bc0def3f01e9a4d1a79b236177956e0566b0d6ba05c866de0f0be596
RUN apk add dumb-init
RUN npm install -g nodemon
ENV NODE_ENV production
USER node
WORKDIR /app
COPY --chown=node:node --from=build /app/node_modules /app/node_modules
COPY --chown=node:node . /app
CMD ["dumb-init", "nodemon", "server.js"]

# * Docker is meant to keep the applications running however since this was a container
# * for development we can use "nodemon" inside of it.