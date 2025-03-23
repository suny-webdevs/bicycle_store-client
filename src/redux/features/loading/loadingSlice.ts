import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type LoadingState = {
  isGlobalLoading: boolean;
};

const initialState: LoadingState = {
  isGlobalLoading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isGlobalLoading = true;
    },
    stopLoading: (state) => {
      state.isGlobalLoading = false;
    },
  },
});

export const { startLoading, stopLoading } = loadingSlice.actions;
export default loadingSlice.reducer;

export const isLoading = (state: RootState) => state.loading.isGlobalLoading;
