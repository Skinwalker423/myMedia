import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk(
  "users/fetch",
  async () => {
    const response = await axios.get(
      "http://localhost:3004/users"
    );
    return response.data;
  }
);

export { fetchUsers };
