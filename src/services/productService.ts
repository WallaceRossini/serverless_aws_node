import { ProductInfra } from '../infra/ProductInfra';
import { PathParameters } from '../models/Response';
import { TypeMethod } from '../models/TypeMethod';
require('dotenv').config()

type ServiceResponse = {
  amount?: number,
  full_price?: number
}
export class ProductService {

  async show({ product_type }: PathParameters): Promise<ServiceResponse> {

    try {
      let list: Array<object>
      let full_price: number = 0

      const productInfra = new ProductInfra();

      const { data, status} = await productInfra.axios_request({
        url: String(process.env.URL),
        method: TypeMethod.GET,
        params:{
          product_type
        }
      });

      if (status != 200) {
        throw new Error('Error request');
      }

      if (!data) {
        return {}
      }

      list = data;

      list.forEach((item: any) => { full_price += Number(item.price) });

      return ({
        amount: list.length,
        full_price: full_price
      });

    } catch (err) {

      throw new Error(err)

    }
  }


}