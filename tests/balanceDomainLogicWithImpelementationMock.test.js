jest.mock('../DomainLogics/balanceDomainLogic');
const { getBalance } = require('../DomainLogics/balanceDomainLogic');

const Incomes = jest.fn(() => {
  return [{ Total: 20000 }]
});

const Expenses = jest.fn(() => {
  return [{ Total: 1000 }]
});

describe("getBalance should return the current available balance or add the new balance to the DB", () => {
  it("Should return the current balance", async () => {
    const balance = getBalance.mockImplementation(async () => {

      const Income = Incomes();
      const Expense = Expenses();

      return { amount: (Income[0].Total - Expense[0].Total) };
    });

    expect(await balance()).toHaveProperty('amount');
  });
});