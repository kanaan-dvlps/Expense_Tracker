const expenseRouter = require('../Routes/expenses');
const axios = require('axios');

const POST_EXPENSE_API_RESULT = async () => {
  try {
    // const result = await axios.post('http://localhost:1337/api/v1/balance/expenses', {
    //   data: {
    //     amount: 200,
    //     type: 'Grocery'
    //   }
    // });
    const result = await axios({
      method: 'post',
      url: 'http://localhost:1337/api/v1/balance/expenses',
      data: {
        amount: 200,
        type: 'Grocery'
      }
    });
    const response = await result.data;
    return response;
  } catch (error) {
    return error;
  }
};


describe("Testing expense router", () => {
  it("Should return 201 when creating a new expense", async () => {

    const result = await POST_EXPENSE_API_RESULT();
    expect(result).toEqual({ amount: 200, type: 'Grocery', successful: true });
  })
})