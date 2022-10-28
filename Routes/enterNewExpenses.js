const router = require('express').Router();
const joi = require('joi');

router.post('/', async (req, res, next) => {
  try {
    
  } catch (error) {
    res.status(error.status).send({
      error: error.message,
      type: error.type
    });
  }
});

module.exports = router;