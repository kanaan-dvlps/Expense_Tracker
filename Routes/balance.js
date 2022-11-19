const router = require('express').Router();
const { balanceAdapter } = require('../Adapters/Inbound/balanceAdapter');

router.get('/', async (req, res, next) => {
  try {

    const balance = await balanceAdapter();
    res.status(200).send({ balance });

  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
