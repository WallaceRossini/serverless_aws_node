export type ResponseBodyVO ={
  code: number;
  message: string;
  data?: object;
}

export type ResponseVO = {
  statusCode: number;
  body: string;
}

export type QueryParameters = {
  product_type: string 
}