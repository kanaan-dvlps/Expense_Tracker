const { getBalance } = require('../DomainLogics/balanceDomainLogic');

describe("getBalance should return the current available balance or add the new balance to the DB", () => {
  it("Should call the function", async () => {
    getBalance().then(data => {
      expect(data).toHaveProperty('amount');
      expect(data).toHaveProperty('_id');
    });
  });
});
