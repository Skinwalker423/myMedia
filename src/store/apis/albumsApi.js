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
      providesTags: (result, error, userId) => {
        const tags = result.map((album) => {
          return { type: "Album", id: album.id };
        });

        return [
          ...tags,
          { type: "UsersAlbums", id: userId },
        ];
      },
    }),
    addAlbumToUser: builder.mutation({
      query: (album) => ({
        url: "albums",
        method: "POST",
        body: album,
      }),
      invalidatesTags: (result, error, album) => [
        { type: "UsersAlbums", id: album.id },
      ],
    }),
    removeAlbumById: builder.mutation({
      query: (album) => ({
        url: `albums/${album.id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, album) => [
        { type: "Album", id: album.id },
      ],
    }),
  }),
});

export const {
  useGetAlbumsByUserQuery,
  useAddAlbumToUserMutation,
  useRemoveAlbumByIdMutation,
} = albumsApi;
