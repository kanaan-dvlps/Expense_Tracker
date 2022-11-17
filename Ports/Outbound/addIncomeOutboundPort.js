const { addIncomeProxy } = require('../../Adapters/Outbound/addIncomeProxy');

const addIncomeOutboundPort = async (data) => {
  try {

    const newIncome = await addIncomeProxy(data);
    return newIncome;

  } catch (error) {
    throw error;
  }
};

module.exports = { addIncomeOutboundPort };
