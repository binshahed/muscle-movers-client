/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<any, any>({
      query: (data) => ({
        url: "/order",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["product"]
    })
  })
});

export const { useCreateOrderMutation } = orderApi;
