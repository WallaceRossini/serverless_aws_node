import { ProductService } from "../services/productService";
import { MessageUtil } from "../utils/message";


export class ProductController {


  async index() {

    try {

      const product_service = new ProductService();

      const { amount, full_price } = await product_service.show();

      return MessageUtil.success({ amount, full_price });

    } catch (error) {
      return MessageUtil.error(
        error.code,
        error.message
      )
    }
  }
}