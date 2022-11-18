const { addBalanceOutboundPort } = require('../Ports/Outbound/addBalanceOutboundPort');
const { } = require('../Ports/Outbound');
const { } = require('../Ports/Outbound');
const { } = require('../Ports/Outbound');

const addBalance = async (data) => {
  try {

    const newBalance = await addBalanceOutboundPort(data);
    return newBalance;
    
  } catch (error) {
    throw error;
  }
};

const getBalances = async () => {
  try {

  } catch (error) {
    throw error;
  }
};

const getBalance = async (id) => {
  try {

  } catch (error) {
    throw error;
  }
};

const deleteBalance = async () => {
  try {

  } catch (error) {
    throw error;
  }
};

module.exports = {
  addBalance,
  getBalances,
  getBalance,
  deleteBalance,
}