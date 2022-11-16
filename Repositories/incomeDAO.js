const Income = require('../Models/income.schema');

const addIncome = async (entities) => {
  try {
    const { amount, type } = entities;

    const newIncome = await new Income({ amount, type });
    const savedIncome = await newIncome.save();

    return savedIncome;
  } catch (error) {
    throw new BadRequest(error);
  }
};

const getIncomes = async () => {
  try {
    const Incomes = await Income.find({});
    return Incomes;
  } catch (error) {
    throw new BadRequest(error);
  }
};

const getIncomeById = async (id) => {
  try {
    const Income = await Income.findOne({ _id: id });
    return Income;
  } catch (error) {
    throw new BadRequest(error);
  }
};
const deleteIncome = async (id) => {
  try {
    const deletedIncome = await Income.findOneAndDelete({ _id: id });
    return deletedIncome;
  } catch (error) {
    throw new BadRequest(error);
  }
};

module.exports = {
  addIncome,
  getIncomes,
  getIncomeById,
  deleteIncome,
};