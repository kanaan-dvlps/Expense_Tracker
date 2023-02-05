## Dockerfile Documentation
This file contains the configuration for building a Docker image for the application. The image will be used to run the application in a container.

### Build Image
The build image is built using the node:16.13.0 image. The FROM node:16.13.0 AS build command sets the base image for the build stage. The build stage is used to install the application dependencies.

- WORKDIR /app sets the working directory for the rest of the build stage to /app.
- COPY package*.json /app/ copies the package.json and package-lock.json files from the host machine to the /app directory in the image.
- RUN npm ci --only=production installs the application dependencies in production mode.
- RUN rm -f .npmrc removes the .npmrc file.

### Production Image
- The production image is built using the node:lts-alpine image. The choice of image depends on the architecture of the host machine. If the host machine is running on Linux/AMD64, use FROM node:lts-alpine@sha256:777b5a7bf0c40e37766ff8df382c900f16c688ed05ae3a72d32a26f3e9002cf9. If the host machine is running on Linux/arm64/v8, use FROM arm64v8/node:lts-alpine@sha256:9aadc575bc0def3f01e9a4d1a79b236177956e0566b0d6ba05c866de0f0be596.

- RUN apk add dumb-init installs dumb-init to handle signals correctly.
- RUN npm install -g nodemon installs the nodemon package globally.
- ENV NODE_ENV production sets the environment variable NODE_ENV to production.
- USER node sets the user for the rest of the production image to node.
- WORKDIR /app sets the working directory for the rest of the production image to /app.
- COPY --chown=node:node --from=build /app/node_modules /app/node_modules copies the node_modules from the build stage to the production image and sets the ownership of the node_modules directory to the node user.
- COPY --chown=node:node . /app copies the rest of the files from the host machine to the /app directory in the image and sets the ownership of the files to the node user.
- CMD ["dumb-init", "nodemon", "server.js"] sets the command to run when a container is started from the production image. The command starts the nodemon process to run the server.js file.

## Docker Compose Configuration for Expense Tracker
The following is a Docker Compose configuration file for the Expense Tracker application. It defines two services: expense_tracker_backend and expense_tracker_database.

### expense_tracker_backend Service
The expense_tracker_backend service is responsible for running the backend of the Expense Tracker application. It uses the Dockerfile located at ./Dockerfile to build the Docker image.

The following is the definition of this service:

```
  expense_tracker_backend:
    build:
      context: .
      dockerfile: ./Dockerfile
```

The service is run with the following options:

```
    stop_signal: SIGINT
    container_name: expense_tracker_api_service
    image: expense_tracker_backend
    ports:
      - "3080:3080"
    volumes:
      - .:/app
    restart: always
```

- stop_signal: Specifies the signal used to stop the container. In this case, it is SIGINT.
- container_name: Specifies the name of the container. The name of this container is expense_tracker_api_service.
- image: Specifies the Docker image to run. The Docker image name is expense_tracker_backend.
- ports: Maps port 3080 of the host to port 3080 of the container.
- volumes: Mounts the local directory (.) to the /app directory in the container.
- restart: Specifies the restart policy. In this case, it is always which means the container will automatically restart if it stops or crashes.

### expense_tracker_database Service
The expense_tracker_database service is responsible for running a MongoDB database for the Expense Tracker application. It uses the official MongoDB image (version 4.4) from Docker Hub.

The following is the definition of this service:

```
  expense_tracker_database:
    image: mongo:4.4
    container_name: expense_tracker_db_service
    ports:
      - "27017:27017"
    volumes:
      - ~/data/expense_tracker/db:/data/db
    restart: unless-stopped
```

The service is run with the following options:

- container_name: Specifies the name of the container. The name of this container is expense_tracker_db_service.
- image: Specifies the Docker image to run. The Docker image name is mongo:4.4.
- ports: Maps port 27017 of the host to port 27017 of the container.
- volumes: Mounts the local directory ~/data/expense_tracker/db to the /data/db directory in the container.
- restart: Specifies the restart policy. In this case, it is unless-stopped which means the container will not automatically restart if it stops or crashes, unless it was stopped manually.

## Environmental Variables
This project uses the following environment variables for configuration:

### `PORT`
- The PORT environment variable is used to specify the port on which the application will listen for incoming requests.
- The default value is 3080.

### `MONGODB_URI`
- The MONGODB_URI environment variable is used to specify the connection string for the MongoDB database.
- The default value is mongodb://expense_tracker_db_service:27017/expense_tracker.