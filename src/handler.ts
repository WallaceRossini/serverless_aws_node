import { ProductService } from "./services/productService";

const productService = new ProductService();

export const show = (event:any) => productService.show();
