import { createSlice } from "@reduxjs/toolkit";
import { fetchAlbums } from "../thunks/fetchAlbums";

const albumsSlice = createSlice({
  name: "albums",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchAlbums.pending,
      (state, action) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
      fetchAlbums.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(
      fetchAlbums.rejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      }
    );
  },
});

export const albumsReducer = albumsSlice.reducer;
