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
  tagTypes: ["todos"],
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getTodos` endpoint is a "query" operation that returns data
    getTodos: builder.query({
      // The URL for the request is 'https://abdulmajid.xyz/api/v1/todos'
      query: () => "/todos",
      providesTags: (result = [], error, arg) => [
        "todos",
        ...result.data.map(({ id }) => ({ type: "todos", id })),
      ],
    }),
    getTodo: builder.query({
      query: (todoId) => `/todos/${todoId}`,
      providesTags: (result, error, arg) => [{ type: "todos", id: arg }],
    }),
    storeTodo: builder.mutation({
      query: (formData) => ({
        url: "/todos",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["todos"],
    }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PUT",
        body: todo,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "todos", id: arg.id }],
    }),
  }),
});

// Export the auto-generated hook for the `getTodos` query endpoint
export const {
  useGetTodosQuery,
  useGetTodoQuery,
  useStoreTodoMutation,
  useUpdateTodoMutation,
} = apiSlice;
