import axios from 'axios';
import { ProductInfra } from '../infra/ProductInfra';
import { MessageUtil } from '../utils/message';

export class ProductService {

  async show() {

    try {
      let list: Array<object>
      let fullPrices: number = 0
      
      const productInfra = new ProductInfra();

      const data = await productInfra.axios_request()
     
      list = data;

      list.forEach((item: any) => { fullPrices += Number(item.price) });

      return MessageUtil.success({
        amount: list.length,
        full_price: fullPrices
      });

    } catch (err) {
      return MessageUtil.error(err.code,err.message)
      
    }
  }


}