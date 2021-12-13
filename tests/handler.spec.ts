import { ProductService } from "../src/services"

describe("Handler", () => {

  it("Should throw an Error product type cannot empty", async () => {

    let sut = require("../src/handler");

    const event = {

    }

    const promise = sut.show(event);

    await expect(promise).rejects.toThrow('Product type cannot empty')

  });

  it("Should return product type cannot empty", async () => {

    let sut = require("../src/handler");

    jest.spyOn(ProductService.prototype, 'show').mockImplementationOnce(async () => ({
      amount: 10,
      full_price: 100
    }));

    const event = {
      queryStringParameters: { product_type: 'any_type' }
    }

    const actual = await sut.show(event);

    console.log(actual)

    await expect(actual).toStrictEqual({
      "statusCode": 200,
      "body": "{\"code\":0,\"message\":\"success\",\"data\":{\"amount\":10,\"full_price\":100}}"
    });

  });

    it("Should return amount and full price", async () => {

      let sut = new ProductService()

      jest.spyOn(ProductService.prototype, 'show').mockImplementationOnce(async () => ({
        amount: 10,
        full_price: 100
      }));

      const actual = await sut.show({ product_type: "any_type" })

      await expect(actual).toStrictEqual({
        amount: 10,
        full_price: 100
      })

    })

  })
