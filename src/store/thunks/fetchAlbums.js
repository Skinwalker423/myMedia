import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchAlbums = createAsyncThunk(
  "albums/fetch",
  async (userId) => {
    const response = await axios.get(
      `http://localhost:3004/albums?userId=${userId}`
    );

    return response.data;
  }
);

export { fetchAlbums };
