const router = require('express').Router();
const { createExpenseAdapter } = require('../Adapters/Inbound/createExpenseAdapter');
const { VALIDATED } = require('../Helpers/responses.json');

router.post('/', async (req, res, next) => {
  try {

    const response = await createExpenseAdapter(req.body);
    // res.status(200).send({ response });

    if (response.type !== VALIDATED) {
      throw response;
    } else {
      res.status(200).send({ response });
    }

  } catch (error) {
    res.status(error.code).send({
      message: error.message,
      type: error.type,
    });
  }
});

module.exports = router;