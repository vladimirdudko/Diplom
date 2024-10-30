import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../utils/constants";

// export const getCategories = createAsyncThunk(
//     "categorise/getCategories",
//     async(_, thunkAPI)=>{
//         try{
//             const res = await axios(`${BASE_URL}/categories`);
//             return res.data;
//         }catch (err){
//             console.log(err);
//             return thunkAPI.rejectWithValue(err)
//         }
//     }
// )

interface CartItem {
  id?: number;
  title: string;
  price: number;
  size: number;
  image: string;
  quantity: number;
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: [],
    cart: [] as CartItem[],
    isLoading: false,
  },
  reducers: {
    addItemToCart: (state, { payload }: { payload: CartItem }) => {
      let newCart = [...state.cart];
      const found = state.cart.find((item) => item.id === payload.id);
      if (found) {
        newCart = newCart.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCart.push(payload);
      }
      state.cart = newCart;
    },
  },
});

export const { addItemToCart } = userSlice.actions;
export default userSlice.reducer;
