import { QueryParameters } from "./models/Response";
import { ProductService } from "./services/productService";
import { MessageUtil } from "./utils/message";

export const show = async (event: any) => {

  let product_type: string | undefined = undefined;

  try {

    if (event.queryStringParameters) {
      product_type = event.queryStringParameters.product_type 
      ? event.queryStringParameters.product_type 
      : undefined;
    }

    if(!product_type){
      throw new Error('Product type cannot empty')
    }

    const product_service = new ProductService();

    const { amount, full_price } = await product_service.show({ product_type });

    return MessageUtil.success({ amount, full_price });

  } catch (error) {
    throw new Error(error)
  }
}
