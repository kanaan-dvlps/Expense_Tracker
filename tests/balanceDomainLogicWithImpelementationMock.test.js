const { getBalance } = require('../DomainLogics/balanceDomainLogic');
const { addBalanceOutboundPort } = require('../Ports/Outbound/addBalanceOutboundPort');

jest.mock('../Ports/Outbound/sumOfIncomesOutboundPort', () => {
  return {
    sumOfIncomesOutboundPort: jest.fn().mockResolvedValue([{ Total: 20000 }])
  }
});

jest.mock('../Ports/Outbound/sumOfExpensesOutboundPort', () => {
  return {
    sumOfExpensesOutboundPort: jest.fn().mockResolvedValue([{ Total: 1000 }])
  }
});

jest.mock('../Ports/Outbound/addBalanceOutboundPort', () => {
  return {
    addBalanceOutboundPort: jest.fn().mockResolvedValue({ amount: 19000 })
  }
});

describe("getBalance should return the current available balance or add the new balance to the DB", () => {
  it("Should return the current balance", async () => {
    const balance = await getBalance();
    expect(addBalanceOutboundPort).toHaveBeenCalledTimes(1);
    expect(addBalanceOutboundPort).toHaveBeenCalledWith(19000);
    expect(balance).toHaveProperty('amount', 19000);
  });
});