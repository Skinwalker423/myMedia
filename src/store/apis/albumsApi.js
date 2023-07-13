import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const albumsApi = createApi({
  reducerPath: "albumsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3004/",
  }),
  endpoints: (builder) => ({
    getAlbumsByUser: builder.query({
      query: (userId) => `albums?userId=${userId}`,
    }),
  }),
});

export const { useGetAlbumsByUserQuery } = albumsApi;
