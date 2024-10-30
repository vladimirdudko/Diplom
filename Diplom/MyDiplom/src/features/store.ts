import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "../shared/baseApi";
import userReducer from "../features/Slice/user/User";

export interface RootState {
  categories: string;
}

export const store = configureStore({
  reducer: {
    user: userReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;

export type RootStateType = ReturnType<typeof store.getState>;
