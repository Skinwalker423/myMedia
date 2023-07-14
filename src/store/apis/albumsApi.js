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
      providesTags: (result, error, userId) => [
        { type: "Album", id: userId },
      ],
    }),
    addAlbumToUser: builder.mutation({
      query: (album) => ({
        url: "albums",
        method: "POST",
        body: album,
      }),
      invalidatesTags: (result, error, album) => [
        { type: "Album", id: album.userId },
      ],
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
