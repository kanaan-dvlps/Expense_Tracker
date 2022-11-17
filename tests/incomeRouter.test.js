const incomeRouter = require('../Routes/income');
const axios = require('axios');

const INCOME_API = async (data) => {
  try {
    const result = await axios({
      method: 'post',
      url: 'http://localhost:1337/api/v1/balance/income',
      data: data
    });
    const response = await result.data;
    return response;
  } catch (error) {
    return error;
  }
};

describe("Testing income router", () => {
  it("Should return data when creating a new income", async () => {

    const result = await INCOME_API({
      amount: 31000,
      type: 'Salary'
    });
    expect(result).toHaveProperty('amount', 31000);
    expect(result).toHaveProperty('type', 'Salary');
    expect(result).toHaveProperty('_id');
  });
});