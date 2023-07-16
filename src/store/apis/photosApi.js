import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/dist/query/react";

export const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3004/",
  }),
  endpoints: (builder) => ({
    getPhotosByAlbumId: builder.query({
      query: (album) => `photos?albumId=${album.id}`,
    }),
  }),
});

export const { useGetPhotosByAlbumIdQuery } = photosApi;
