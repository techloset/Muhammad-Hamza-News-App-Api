import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios, { AxiosResponse } from 'axios';

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
  searchQuery: "", // Search query to be used for filtering articles
}

// Interface defining the structure of an Article
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

export const fetchArticles = createAsyncThunk('article/fetchArticles', async () => {
  const response: AxiosResponse<{ results: Article[] }> = await axios.get(
    "https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=SGAGNWswD7NBONf4JPcqYJoC6e07Tzw1"
  );
  return response.data.results
})

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers:{

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = null
        state.data = action.payload
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.error.message || "Something went wrong"
      })
  }
})

export default articleSlice.reducer