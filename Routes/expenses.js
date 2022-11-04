const router = require('express').Router();
const { createExpenseAdapter } = require('../Adapters/Inbound/createExpenseAdapter');

router.post('/', async (req, res, next) => {
  try {

    const response = await createExpenseAdapter(req.body);
    // res.status(200).send({ response });

    if (response.type === 'EXCEPTION_VALIDATION_ERROR') {
      throw response;
    } else {
      res.status(200).send({ response })
    }

  } catch (error) {
    console.log('API Error:', error);
    res.status(error.code).send({
      message: error.message,
      type: error.type,
    });
    next();
  }
});

module.exports = router;