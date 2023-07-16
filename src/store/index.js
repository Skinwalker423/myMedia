import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/usersSlice";
import { albumsReducer } from "./slices/albumsSlice";
import { albumsApi } from "./apis/albumsApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  useGetAlbumsByUserQuery,
  useAddAlbumToUserMutation,
  useRemoveAlbumByIdMutation,
} from "./apis/albumsApi";
import {
  useGetPhotosByAlbumIdQuery,
  photosApi,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} from "./apis/photosApi";

export const store = configureStore({
  reducer: {
    users: userReducer,
    albums: albumsReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      albumsApi.middleware,
      photosApi.middleware,
    ]),
});

setupListeners(store.dispatch);

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/deleteUser";
export * from "./thunks/fetchAlbums";
export {
  useAddAlbumToUserMutation,
  useGetAlbumsByUserQuery,
  useRemoveAlbumByIdMutation,
};

export {
  useGetPhotosByAlbumIdQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
};
