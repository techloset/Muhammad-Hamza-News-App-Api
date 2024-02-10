import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { AxiosResponse } from "axios";
import Instance from "../../utility/Instance";

export interface articleState {
  data: Article[] | null;
  isLoading: boolean;
  isError: string | null;
  searchQuery: string;
}

const initialState: articleState = {
  data: null,
  isLoading: false,
  isError: "",
  searchQuery: "",
};

export interface Article {
  id: number;
  byline: string;
  title: string;
  section: string;
  abstract: string;
  published_date: string;
  media: {
    "media-metadata": {
      url: string;
    }[];
  }[];
}

export const fetchArticles = createAsyncThunk(
  "article/fetchArticles",
  async () => {
    try {
      const response: AxiosResponse<{ results: Article[] }> = await Instance.get("/mostpopular/v2/viewed/30.json");
      return response.data.results;
    } catch (error: any) {
      throw new Error(error?.message || "Something went wrong");
    }
  }
);

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.data = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message || "Something went wrong";
      });
  },
});

export default articleSlice.reducer;
