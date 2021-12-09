export type ResponseBodyVO ={
  code: number;
  message: string;
  data?: object;
}

export type ResponseVO = {
  statusCode: number;
  body: string;
}

export type PathParameters = {
  product_type?: string;
}