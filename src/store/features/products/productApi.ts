import { TProduct } from "../../../types/types.products";
import { baseApi } from "../../api/baseApi";

export type ProductTag = "Product" | "products";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.mutation({
      query: (data) => ({
        url: `/products?${data.query.query}`,
        method: "POST",
        body: data.data
      })
    }),

    createProduct: builder.mutation({
      query: (data) => ({
        url: `/products/create-product`,
        method: "POST",
        body: data
      }),
      invalidatesTags: [{ type: "Product", id: "LIST" }]
    }),
    getProductById: builder.query<TProduct, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET"
      }),
      providesTags: (result, error, id) => [{ type: "Product" as const, id }]
    }),
    getProducts: builder.query({
      query: () => ({
        url: `/products`,
        method: "GET"
      }),
      providesTags: [{ type: "Product" as const, id: "LIST" }]
    })
  })
});

export const {
  useGetAllProductsMutation,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useGetProductsQuery
} = productApi;
