const axios = require('axios')

const base_url = 'http://127.0.0.1:3000/dev';

describe("Product",() => {

  it("Get amount and full price", async () => {

    const response = await axios.get(`${base_url}/show`)

    expect(response.status).toBe(200);
  });
})