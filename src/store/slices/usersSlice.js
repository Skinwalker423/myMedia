import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addUser(state, action) {
      state.data.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(
      fetchUsers.rejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
  },
});

export const userReducer = usersSlice.reducer;
export const { addUser } = usersSlice.actions;
