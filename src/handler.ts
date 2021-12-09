import { PathParameters } from "./models/Response";
import { ProductService } from "./services/productService";
import { MessageUtil } from "./utils/message";




export const show = async (event: any) => {
  try {

    const { product_type }: PathParameters = event.pathParameters;

    if (!product_type)
      return MessageUtil.error(
        404,
        'Product type cannot be empty or null'
      )

    const product_service = new ProductService();

    const { amount, full_price } = await product_service.show({ product_type });

    return MessageUtil.success({ amount, full_price });

  } catch (error) {
    return MessageUtil.error(
      error.code,
      error.message
    )
  }
}
