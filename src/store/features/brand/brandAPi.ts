import { baseApi } from "../../api/baseApi";

const brandAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBrand: builder.query({
      query: () => ({
        url: "/brand",
        method: "GET"
      })
    })
  })
});

export const { useGetBrandQuery } = brandAPi;
