import axios from 'axios';
import { TypeMethod } from '../models/TypeMethod';
import { MessageUtil } from '../utils/message';

type Params = {
  url: string,
  method: TypeMethod
  params?: any
}

type DataResponse = {
  data?: any,
  status: number
}
export class ProductInfra {


  async axios_request({ url,method,params }: Params): Promise<DataResponse> {

    try {

      const response = await axios({
        url,
        method,
        params
      });

      return response;

    } catch (err) {

      throw new Error(err)

    }


  }
}