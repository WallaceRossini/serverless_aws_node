import axios from 'axios';
import { TypeMethod } from '../models/TypeMethod';
import { MessageUtil } from '../utils/message';



type Params = {
  url: string,
  method: TypeMethod
  params?: any
}
export class ProductInfra {


  async axios_request({ url,method,params }: Params) {

    try {

      const { data, status } = await axios({
        url,
        method,
        params,
      });

      if (status == 200)
        return data;

    } catch (err) {
      return MessageUtil.error(err.code, err.message)
    }


  }
}