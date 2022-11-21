const Balance = require('../Models/balance.schema');

const addBalance = async (amount) => {
  try {

    const amountExists = await Balance.find({ amount: { $eq: amount } });
    if (amountExists.length > 0) {
      return amountExists[0];
    } else {
      const newBalance = await new Balance({ amount });
      const savedBalance = await newBalance.save();
      return savedBalance;
    }

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