/* eslint-disable @typescript-eslint/no-unused-vars */
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../../config";
import { RootState } from "../store";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: config.BASE_URL,
    credentials: "include",
    prepareHeaders: async (headers, { getState }) => {
      // headers.set("Content-Type", "application/json");
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    }
  }),
  tagTypes: ["product"],
  endpoints: () => ({})
});
