import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUser = createAsyncThunk(
  "users/delete",
  async (id) => {
    const response = await axios.delete(
      `http://localhost:3004/users/${id}`
    );
    console.log("response from delete user", response.data);
    return id;
  }
);

export { deleteUser };
