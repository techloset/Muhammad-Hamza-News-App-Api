import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios, { AxiosResponse } from 'axios';



export interface SearchState {
  searchResults: SearchResponse[] | null;
  isLoading: boolean;
  isError: string | null;
}

const initialState: SearchState = {
  searchResults: null,
  isLoading: false,
  isError: "",
};

export interface SearchResponse {
  _id: string;
  multimedia: { url: string }[];
  headline: { main: string };
  abstract: string;
  pub_date: string;
  byline: { original: string };
}


export const fetchSearchResults = createAsyncThunk<SearchResponse[], string>(
  'search/fetchSearchResults',
  async (searchQuery: string) => {
    try {
      const responseData: AxiosResponse<{ response: { docs: SearchResponse[] } }> =
        await axios.get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&api-key=SGAGNWswD7NBONf4JPcqYJoC6e07Tzw1`
        );

      return responseData.data.response.docs;
    } catch (error) {
      throw error;
    }
  }
);


export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder
          .addCase(fetchSearchResults.pending, (state) => {
              state.isLoading = true;
          })
          .addCase(fetchSearchResults.fulfilled, (state, action) => {
              state.isLoading = false;
              state.isError = null;
              state.searchResults = action.payload;
          })
          .addCase(fetchSearchResults.rejected, (state, action) => {
              state.isLoading = false;
              state.isError = action.error.message || "Something went wrong";
          });
  },
});



export default searchSlice.reducer;
