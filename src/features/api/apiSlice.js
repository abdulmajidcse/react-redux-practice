// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({
    baseUrl: "https://abdulmajid.xyz/api/v1",
  }),
  tagTypes: ["todos", "todo"],
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getTodos` endpoint is a "query" operation that returns data
    getTodos: builder.query({
      // The URL for the request is 'https://abdulmajid.xyz/api/v1/todos'
      query: () => "/todos",
      providesTags: ["todos"],
    }),
    getTodo: builder.query({
      query: (todoId) => `/todos/${todoId}`,
      providesTags: ["todo"],
    }),
    storeTodo: builder.mutation({
      query: (formData) => ({
        url: "/todos",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["todos", "todo"],
    }),
  }),
});

// Export the auto-generated hook for the `getTodos` query endpoint
export const { useGetTodosQuery, useGetTodoQuery, useStoreTodoMutation } =
  apiSlice;
