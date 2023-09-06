import {
    DeleteRequest,
    GetRequest,
    PatchRequest,
    PostRequest,
    PutRequest,
  } from "@/app/plugins/https";

  export const APIGetAllProducts=()=>GetRequest('/products');
  export const APIProductDetails=(id:string)=>GetRequest(`/products/${id}`);