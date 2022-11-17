const { APIBodyValidator } = require('../../Validators/APIBodyValidator');
const { addIncomeInboundPort } = require('../../Ports/Inbound/addIncomeInboundPort');

const addIncomeAdapter = async (body) => {
  try {

    const response = await APIBodyValidator(body);
    const newIncome = await addIncomeInboundPort(response);
    return newIncome;

  } catch (error) {
    throw error;
  }
};

module.exports = { addIncomeAdapter };
