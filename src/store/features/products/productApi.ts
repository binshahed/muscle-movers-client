import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGetProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET"
      })
    })
  })
});

export const { useGetGetProductsQuery } = productApi;
