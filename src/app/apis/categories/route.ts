import {
    DeleteRequest,
    GetRequest,
    PatchRequest,
    PostRequest,
    PutRequest,
  } from "@/app/plugins/https";

  export const APIGetCategories=()=>GetRequest('/products/categories');