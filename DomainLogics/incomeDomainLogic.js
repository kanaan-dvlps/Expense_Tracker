// const  = async () => {
//   try {

//   } catch (error) {
//     throw error;
//   }
// };

// module.exports = {  };

const { addIncomeOutboundPort } = require('../Ports/Outbound/addIncomeOutboundPort');
// const {  } = require('../Ports/Outbound/');
// const {  } = require('../Ports/Outbound/');
// const {  } = require('../Ports/Outbound/');

const addIncome = async (data) => {
  try {

    const newIncome = await addIncomeOutboundPort(data);
    return newIncome;

  } catch (error) {
    throw error;
  }
};

const getIncomeById = async (id) => {
  try {

  } catch (error) {
    throw error;
  }
};

const getIncomes = async () => {
  try {

  } catch (error) {
    throw error;
  }
};

const deleteIncome = async (id) => {
  try {

  } catch (error) {
    throw error;
  }
};


module.exports = {
  addIncome,
  getIncomeById,
  getIncomes,
  deleteIncome,
};
