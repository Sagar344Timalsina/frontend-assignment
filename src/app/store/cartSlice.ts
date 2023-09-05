import { createSlice } from "@reduxjs/toolkit";

type storeProps = {
  id: number;
  quantity: number;
  price: number;
  image: string;
  title: string;
};
interface NextState {
  productData: storeProps[];
  favouriteData: storeProps[];
  allProducts: storeProps[];
}
const initilState: NextState = {
  productData: [],
  favouriteData: [],
  allProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initilState,
  reducers: {
    add(state, action) {
      const existingProduct = state.productData.find(
        (items: storeProps) => items.id === action.payload.id
      );
     
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
      
    },
    remove:(state, action)=> {
        state.productData= state.productData.filter((item: storeProps) => item.id !== action.payload.id);
    },
    resetData:(state, action)=>{
        state.productData=[]
    },
    increaseQuantity:(state,action)=>{
        const existingProduct = state.productData.find(
            (items: storeProps) => items.id === action.payload.id
          );
          existingProduct && existingProduct.quantity++;
    },
    decreaseQuantity:(state,action)=>{
        const existingProduct = state.productData.find(
            (items: storeProps) => items.id === action.payload.id
          );
          if(existingProduct?.quantity===1){
            existingProduct.quantity=1
          }
          else{
            existingProduct!.quantity--;
          }
    }
  },
});

export const { add,remove,decreaseQuantity,increaseQuantity,resetData } = cartSlice.actions;
export default cartSlice.reducer;
