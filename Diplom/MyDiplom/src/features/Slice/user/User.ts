import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../utils/constants";

export interface CartItem {
  id?: number;
  title: string;
  price: number;
  size: number;
  image: string;
  quantity: number;
  category?: string;
}
interface User {
  id?: number;
  email?: string;
  name?: string;
  avatar?: string;
}

interface UserState {
  currentUser: User | undefined;
  cart: CartItem[];
  isLoading: boolean;
  formType: "signup" | "login";
  showForm: boolean;
}

export const createUser = createAsyncThunk<User, User, { rejectValue: string }>(
  "users/createUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/users`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue("Failed to create user");
    }
  }
);

export const updateUser = createAsyncThunk<User, User, { rejectValue: string }>(
  "users/updateUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.put(`${BASE_URL}/users/${payload.id}`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue("Failed to update user");
    }
  }
);

interface UserLogin {
  email?: string;
  password?: string;
}

interface Token {
  access_token: string;
  refresh_token: string;
}

export const loginUser = createAsyncThunk<
  UserLogin,
  Token,
  { rejectValue: string }
>("users/loginUser", async (payload, thunkAPI) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/login/`, payload);

    const login = await axios(`${BASE_URL}/auth/profile/`, {
      headers: {
        Authorization: `Bearer ${res.data.access_token}`,
      },
    });

    return login.data;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue("Failed to login user");
  }
});
const initialState: UserState = {
  currentUser: undefined,
  cart: [],
  isLoading: false,
  formType: "signup",
  showForm: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        if (action.payload.quantity > 0) {
          itemInCart.quantity = action.payload.quantity;
        }
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    toggleForm: (state, action: PayloadAction<boolean>) => {
      state.showForm = action.payload;
    },
    toggleFormType: (state, action: PayloadAction<"signup" | "login">) => {
      state.formType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentUser = payload;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentUser = payload;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentUser = payload;
      })
      .addCase(createUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addItemToCart, toggleForm, toggleFormType, removeCartItem } =
  userSlice.actions;
export default userSlice.reducer;
