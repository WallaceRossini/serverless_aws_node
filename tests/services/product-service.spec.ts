import { ProductService } from '../../src/services'
import { ProductInfra } from '../../src/infra/ProductInfra'


describe("Product", () => {

  let sut

  beforeEach(() => {

    sut = new ProductService()

  })

  it("Should throw an Error when statusCode is not 200", async () => {

    jest.spyOn(ProductInfra.prototype, 'axios_request').mockImplementationOnce(async () => ({

      status: 400

    }));

    const promise = sut.show({ product_type: 'any_type' })

    await expect(promise).rejects.toThrow('Error request')

  });


  it("Should return an empty return when data is undefined", async () => {

    jest.spyOn(ProductInfra.prototype, 'axios_request').mockImplementationOnce(async () => ({

      status: 200

    }))

    const actual = await sut.show({ product_type: 'any_type' })

    expect(actual).toStrictEqual({})
  })

  it("Should return data", async () => {

    jest.spyOn(ProductInfra.prototype, 'axios_request').mockImplementationOnce(async () => ({
      status: 200,
      data:
        [
          { price: 10 },
          { price: 20 }
        ]
    }));

    const actual = await sut.show({ product_type: 'any_type' })

    expect(actual).toStrictEqual({amount: 2, full_price: 30})
  })

})