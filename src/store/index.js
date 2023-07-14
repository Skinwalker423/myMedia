import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/usersSlice";
import { albumsReducer } from "./slices/albumsSlice";
import { albumsApi } from "./apis/albumsApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  useGetAlbumsByUserQuery,
  useAddAlbumToUserMutation,
} from "./apis/albumsApi";

export const store = configureStore({
  reducer: {
    users: userReducer,
    albums: albumsReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(albumsApi.middleware),
});

setupListeners(store.dispatch);

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/deleteUser";
export * from "./thunks/fetchAlbums";
export {
  useAddAlbumToUserMutation,
  useGetAlbumsByUserQuery,
};
