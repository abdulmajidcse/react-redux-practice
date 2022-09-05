import { useGetTodosQuery } from "../api/apiSlice";
import { Table } from "react-bootstrap";

export const TodosList = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetTodosQuery();

  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  } else if (isSuccess) {
    return (
      <>
        <h2>Todo List</h2>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>SL</th>
              <th>Title</th>
              <th>Note</th>
              <th>Comment</th>
              <th>Created Date</th>
            </tr>
          </thead>
          <tbody>
            {data.data?.map((todo, index) => (
              <tr key={index}>
                <td>{++index}</td>
                <td>{todo.title}</td>
                <td>{todo.note}</td>
                <td>{todo.comment}</td>
                <td>{todo.created_at}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  } else if (isError) {
    return (
      <>
        <p>{error.data.message}</p>
      </>
    );
  }
};
