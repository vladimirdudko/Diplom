import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constants";
import { buildUrl } from "../../utils/common";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Categories;
  images: string[];
}

export interface Categories {
  id: number;
  name: string;
  image?: string;
}
type GetProductParams = Record<string, string | number>;
export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query<Categories[], void>({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
    }),
    getProducts: builder.query<Product[], void>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
    getProduct: builder.query<Product[], GetProductParams>({
      query: (params) => buildUrl(`/products`, params),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductQuery,
} = shopApi;
