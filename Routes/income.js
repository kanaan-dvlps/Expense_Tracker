const router = require('express').Router();
const { addIncomeAdapter } = require('../Adapters/Inbound/addIncomeAdapter');
const { getIncomeByIdAdapter } = require('../Adapters/Inbound/getIncomeByIdAdapter');
const { getIncomesAdapter } = require('../Adapters/Inbound/getIncomesAdapter');
const { deleteIncomeAdapter } = require('../Adapters/Inbound/deleteIncomeAdapter');
router.post('/', async (req, res, next) => {
  try {

    const result = await addIncomeAdapter(req.body);
    res.status(201).send(result);

  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', async (req, res, next) => {
  try {

    const result = await getIncomesAdapter();
    res.status(201).send(result);

  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {

    const { id } = req.params;
    const result = await getIncomeByIdAdapter(id);
    res.status(201).send(result);

  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {

    const { id } = req.params;
    const result = await deleteIncomeAdapter(id);
    res.status(201).send(result);

  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;