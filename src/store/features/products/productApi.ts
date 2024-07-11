import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.mutation({
      query: (data) => ({
        url: `/products?${data.query.query}`,
        method: "POST",
        body: data.data
      })
    })
  })
});

export const { useGetAllProductsMutation } = productApi;
