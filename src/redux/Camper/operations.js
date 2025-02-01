import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const campers = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/",
});

export const getCampers = createAsyncThunk(
  "getCampers",
  async (filters, thunkApi) => {
    try {
      const response = await campers.get("/campers", { params: filters });
      toast.success("GOOD");
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("Email is already in use. Please try another one.");
      }
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

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
