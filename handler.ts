import { ProductService } from "./src/services/productService";
require('dotenv').config()

const productService = new ProductService()

export const show = (event:any) => productService.show();
