import { configureStore } from '@reduxjs/toolkit'
import articleReducer from './slice/articleSlice'
import searchReducer from './slice/searchSlice'


export const store = configureStore({
  reducer: {
    article: articleReducer,
    search: searchReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch