const { APIBodyValidator } = require('../../Validators/APIBodyValidator');
const { addBalanceInboundPort } = require('../../Ports/Inbound/addBalanceInboundPort');

const addBalanceAdapter = async (body) => {
  try {
    
    const response = await APIBodyValidator(body);
    const newBalance = await addBalanceInboundPort(response);
    return newBalance;

  } catch (error) {
    throw error;
  }
};

module.exports = { addBalanceAdapter };
