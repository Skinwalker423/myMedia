import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addUser = createAsyncThunk("users/add", async () => {
  const username = faker.person.firstName();
  console.log("created new user", username);

  const response = await axios.post(
    "http://localhost:3004/users",
    {
      name: username,
    }
  );

  return response.data;
});

export { addUser };
