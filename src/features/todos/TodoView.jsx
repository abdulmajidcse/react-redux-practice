import { useParams } from "react-router-dom";
import { useGetTodoQuery } from "../api/apiSlice";

export const TodoView = () => {
  const { todoId } = useParams();
  const { data, isLoading, isSuccess, isError, error } =
    useGetTodoQuery(todoId);

  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  } else if (isSuccess) {
    return (
      <>
        <div className="container">
          <h2>Todo Details</h2>
          {data.data ? (
            <div>
              <p>Title: {data.data.title}</p>
              <p>Note: {data.data.note}</p>
              <p>Comment: {data.data.comment}</p>
              <p>Created Date: {data.data.created_at}</p>
            </div>
          ) : (
            <div className="text-danger text-center">Not Found</div>
          )}
        </div>
      </>
    );
  } else if (isError) {
    return (
      <>
        <p>Something went wrong to fetch.</p>
      </>
    );
  }
};
