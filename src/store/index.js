import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/usersSlice";
import { albumsReducer } from "./slices/albumsSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    albums: albumsReducer,
  },
});

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/deleteUser";
export * from "./thunks/fetchAlbums";
