import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const campers = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/",
});

export const getCampers = createAsyncThunk("getCampers", async (thunkApi) => {
  try {
    const response = await campers.get(`/campers`);
    return response.data;
  } catch (error) {
    toast.error(error.message);
    return thunkApi.rejectWithValue(error.message);
  }
});

export const getCampersId = createAsyncThunk(
  "getCampersId",
  async (id, thunkApi) => {
    try {
      const response = await campers.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      toast.error(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
