const router = require('express').Router();
const { createExpenseAdapter } = require('../Adapters/Inbound/createExpenseAdapter');
const { VALIDATED } = require('../Helpers/responses.json');

router.post('/', async (req, res, next) => {
  try {

    const response = await createExpenseAdapter(req.body);
    res.status(200).send(response);

  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {

  } catch (error) {
    res.status(400).send(error);
  }
})

module.exports = router;