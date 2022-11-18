const Balance = require('../Models/balance.schema');

const addBalance = async (entities) => {
  try {
    const { amount, type } = entities;

    const newBalance = await new Balance({ amount, type });
    const savedBalance = await newBalance.save();

    return savedBalance;
  } catch (error) {
    throw new BadRequest(error);
  }
};

const getBalances = async () => {
  try {
    const balances = await Balance.find({});
    return balances;
  } catch (error) {
    throw new BadRequest(error);
  }
};

const getBalanceById = async (id) => {
  try {
    const balance = await Balance.findOne({ _id: id });
    return balance;
  } catch (error) {
    throw new BadRequest(error);
  }
};
const deleteBalance = async (id) => {
  try {
    const deletedBalance = await Balance.findOneAndDelete({ _id: id });
    return deletedBalance;
  } catch (error) {
    throw new BadRequest(error);
  }
};

module.exports = {
  addBalance,
  getBalances,
  getBalanceById,
  deleteBalance,
};