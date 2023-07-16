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
      query: (album) => ({
        url: "photos",
        params: {
          albumId: album.id,
        },
        method: "GET",
      }),

      providesTags: (result, error, album) => {
        if (!result) return [];
        console.log("results in getPhotos", result);
        const tags = result.map((photo) => {
          return {
            type: "Photos",
            id: photo.id,
          };
        });
        tags.push({ type: "PhotosAlbum", id: album.id });
        return tags;
      },
    }),
    addPhoto: builder.mutation({
      query: (photo) => ({
        url: "photos",
        method: "POST",
        body: {
          albumId: photo.albumId,
          url: photo.url,
        },
      }),
      invalidatesTags: (result, error, photo) => [
        { type: "Photos", id: photo.id },
      ],
    }),
    removePhoto: builder.mutation({
      query: (photo) => ({
        url: `photos/${photo.id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, photo) => [
        { type: "Photos", id: photo.id },
      ],
    }),
  }),
});

export const {
  useGetPhotosByAlbumIdQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} = photosApi;
