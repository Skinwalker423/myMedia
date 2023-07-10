import { configureStore } from "@reduxjs/toolkit";
import { addUser, userReducer } from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export { store, addUser };
