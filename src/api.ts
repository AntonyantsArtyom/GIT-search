import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const GITHUB_TOKEN = "";

export const api = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/graphql",
    method: "POST",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${GITHUB_TOKEN}`);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: () => ({}),
});
