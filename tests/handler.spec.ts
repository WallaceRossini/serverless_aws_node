import { ProductService } from "../src/services"


describe("Handler", () => {

  let sut

  beforeEach(() => {
    sut = new ProductService()
  })

  it("Should throw an Error when statusCode is not 200", async () => {

    jest.spyOn(ProductService.prototype, 'show').mockImplementationOnce(async () =>({}));

    const promise = sut.show()

    console.log(promise)

    // await expect(promise).rejects.toThrow('Error request')

  });

  it("Should return amount and full price", async () => {

    jest.spyOn(ProductService.prototype, 'show').mockImplementationOnce(async () => ({
      amount:10,
      full_price:100
    }));

    const actual = await sut.show({ product_type: "any_type" })

    await expect(actual).toStrictEqual({
      amount:10,
      full_price:100
    })

  })
})
