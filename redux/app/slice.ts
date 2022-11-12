import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const fetchPackagesAsync = createAsyncThunk("fetchPackagesAsync", () => {
  return fetch("/packages.json").then((res) => res.json());
});

export interface AppState {
  packages: any[];
}

export const initialState: AppState = {
  packages: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPackagesAsync.fulfilled, (state, action) => {
        state.packages = action.payload;
      })
      .addCase(fetchPackagesAsync.rejected, (state, action) => {
        state.packages = [];
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: appActions, reducer: appReducer } = appSlice;
