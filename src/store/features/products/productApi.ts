/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProduct } from "../../../types/types.products";
import { baseApi } from "../../api/baseApi";

export type ProductTag = "Product" | "products";

const productApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ["Product"]
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllProducts: builder.mutation<
        any,
        { query: { query: string }; data: any }
      >({
        query: (data) => ({
          url: `/products?${data.query.query}`,
          method: "POST",
          body: data.data
        })
      }),

      createProduct: builder.mutation<any, Partial<TProduct>>({
        query: (data) => ({
          url: `/products/create-product`,
          method: "POST",
          body: data
        }),
        invalidatesTags: [{ type: "Product", id: "LIST" }]
      }),

      updateProduct: builder.mutation<any, Partial<TProduct>>({
        query: (data) => ({
          url: `/products/${data?._id}`,
          method: "PUT",
          body: data
        }),
        invalidatesTags: [{ type: "Product", id: "LIST" }]
      }),

      getProductById: builder.query<any, string>({
        query: (id) => ({
          url: `/products/${id}`,
          method: "GET"
        }),
        providesTags: (_result, _error, id) => [{ type: "Product", id }]
      }),

      getProducts: builder.query<any, void>({
        query: () => ({
          url: `/products`,
          method: "GET"
        }),
        providesTags: [{ type: "Product", id: "LIST" }]
      }),

      deleteProduct: builder.mutation<any, string>({
        query: (id) => ({
          url: `/products/${id}`,
          method: "DELETE"
        }),
        invalidatesTags: [{ type: "Product", id: "LIST" }]
      })
    })
  });

export const {
  useGetAllProductsMutation,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
  useDeleteProductMutation
} = productApi;
