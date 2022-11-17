const router = require('express').Router();
const { VALIDATED } = require('../Helpers/responses.json');
const { createExpenseAdapter } = require('../Adapters/Inbound/createExpenseAdapter');
const { getExpenseByIdAdapter } = require('../Adapters/Inbound/getExpenseByIdAdapter');
const { getExpensesAdapter } = require('../Adapters/Inbound/getExpensesAdapter');
const { deleteExpenseAdapter } = require('../Adapters/Inbound/deleteExpenseAdapter');


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

    const { id } = req.params;
    const expense = await getExpenseByIdAdapter(id);
    res.status(200).send(expense);

  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/', async (req, res, next) => {
  try {

    const expenses = await getExpensesAdapter();
    res.status(200).send(expenses);

  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {

    const { id } = req.params;
    const deletedExpense = await deleteExpenseAdapter(id);
    res.status(200).send(deletedExpense);

  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;