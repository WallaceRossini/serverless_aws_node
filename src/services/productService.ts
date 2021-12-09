import axios from 'axios';
import { products } from '../data/product';
import { ProductInfra } from '../infra/ProductInfra';
import { TypeMethod } from '../models/TypeMethod';
import { MessageUtil } from '../utils/message';
require('dotenv').config()


type ServiceResponse = {
  amount: number,
  full_price: number
}
export class ProductService {

  async show(): Promise<ServiceResponse> {

    try {
      let list: Array<object>
      let full_price: number = 0

      const productInfra = new ProductInfra();

      const data = await productInfra.axios_request({
        url: String(process.env.URL),
        method: TypeMethod.GET
      });

      list = data;

      list.forEach((item: any) => { full_price += Number(item.price) });

      return ({
        amount: list.length,
        full_price: full_price
      });

    } catch (err) {

      return err

    }
  }


}