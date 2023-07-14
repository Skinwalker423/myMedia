import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

export const albumsApi = createApi({
  reducerPath: "albumsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3004",
  }),
  endpoints: (builder) => ({
    getAlbumsByUser: builder.query({
      query: (userId) => `/albums?userId=${userId}`,
    }),
    addAlbumToUser: builder.mutation({
      query: (userId) => ({
        url: "/albums",
        method: "POST",
        body: {
          title: faker.company.catchPhrase(),
          userId: userId,
        },
      }),
    }),
    removeAlbumById: builder.mutation({
      query: (albumId) => ({
        url: `albums/${albumId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAlbumsByUserQuery,
  useAddAlbumToUserMutation,
  useRemoveAlbumByIdMutation,
} = albumsApi;
