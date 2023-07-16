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
  }),
});

export const {
  useGetPhotosByAlbumIdQuery,
  useAddPhotoMutation,
} = photosApi;
