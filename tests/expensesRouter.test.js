const expenseRouter = require('../Routes/expenses');
const axios = require('axios');

const POST_EXPENSE_API_RESULT = async (data) => {
  try {
    const result = await axios({
      method: 'post',
      url: 'http://localhost:1337/api/v1/balance/expenses',
      data: data
    });
    const response = await result.data;
    return response;
  } catch (error) {
    return error;
  }
};

describe("Testing expense router", () => {
  it("Should return 201 when creating a new expense", async () => {

    const result = await POST_EXPENSE_API_RESULT({
      amount: 200,
      type: 'Grocery'
    });
    expect(result).toEqual({ amount: 200, type: 'Grocery', successful: true });
  });
});