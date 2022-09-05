import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./../features/counter/counterSlice";
import postsReducer from "./../features/posts/postsSlice";
import { apiSlice } from "../features/api/apiSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
