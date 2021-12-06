import axios from 'axios';
import { MessageUtil } from '../utils/message';

export class ProductInfra {


  async axios_request() {

    try {

      const { data } = await axios.get(`${process.env.URL_HEROKU}`);

      if(data)
        return data;

      return {}

    } catch (err) {
      return MessageUtil.error(err.code, err.message)
    }


  }
}