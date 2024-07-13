/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProduct } from "../../../types/types.products";
import { baseApi } from "../../api/baseApi";

// Define Product tags for cache management
export type ProductTag = "Product" | "products";

// Enhance baseApi with product-specific endpoints and tag types
const productApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ["Product"]
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      // Endpoint for fetching all products with a custom query
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

      // Endpoint for creating a new product
      createProduct: builder.mutation<any, Partial<TProduct>>({
        query: (data) => ({
          url: `/products/create-product`,
          method: "POST",
          body: data
        }),
        // Invalidate product list cache after creating a product
        invalidatesTags: [{ type: "Product", id: "LIST" }]
      }),

      // Endpoint for updating an existing product
      updateProduct: builder.mutation<any, Partial<TProduct>>({
        query: (data) => ({
          url: `/products/${data?._id}`,
          method: "PUT",
          body: data
        }),
        // Invalidate product list cache after updating a product
        invalidatesTags: [{ type: "Product", id: "LIST" }]
      }),

      // Endpoint for fetching a product by its ID
      getProductById: builder.query<any, string>({
        query: (id) => ({
          url: `/products/${id}`,
          method: "GET"
        }),
        // Provide product tag by ID for cache management
        providesTags: (_result, _error, id) => [{ type: "Product", id }]
      }),

      // Endpoint for fetching all products
      getProducts: builder.query<any, void>({
        query: () => ({
          url: `/products`,
          method: "GET"
        }),
        // Provide product list tag for cache management
        providesTags: [{ type: "Product", id: "LIST" }]
      }),

      // Endpoint for deleting a product by its ID
      deleteProduct: builder.mutation<any, string>({
        query: (id) => ({
          url: `/products/${id}`,
          method: "DELETE"
        }),
        // Invalidate product list cache after deleting a product
        invalidatesTags: [{ type: "Product", id: "LIST" }]
      })
    })
  });

// Export hooks for using the product endpoints
export const {
  useGetAllProductsMutation,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
  useDeleteProductMutation
} = productApi;
