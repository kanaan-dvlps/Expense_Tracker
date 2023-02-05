const expenseRouter = require('../Routes/expenses');
const axios = require('axios');

const POST_EXPENSE_API_RESULT = async (data) => {
  try {
    const result = await axios({
      method: 'post',
      url: 'http://localhost:3080/api/v1/balance/expense',
      data: data
    });
    const response = await result.data;
    return response;
  } catch (error) {
    return error;
  }
};

describe("Testing expense router", () => {
  it("Should return data when creating a new expense", async () => {

    const result = await POST_EXPENSE_API_RESULT({
      amount: 200,
      type: 'Grocery'
    });
    expect(result).toHaveProperty('amount', 200);
    expect(result).toHaveProperty('type', 'Grocery');
    expect(result).toHaveProperty('_id');
  });
});