import { useGetTodosQuery } from "../api/apiSlice";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const TodosList = () => {
  const { data, isLoading, isSuccess, isError, error, refetch, isFetching } =
    useGetTodosQuery();

  if (isLoading || isFetching) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  } else if (isSuccess) {
    return (
      <>
        <h2>
          Todo List{" "}
          <button type="button" className="btn btn-danger" onClick={refetch}>
            Reload Data
          </button>
        </h2>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>SL</th>
              <th>Title</th>
              <th>Note</th>
              <th>Comment</th>
              <th>Created Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.data ? (
              data.data.map((todo, index) => (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>{todo.title}</td>
                  <td>{todo.note}</td>
                  <td>{todo.comment}</td>
                  <td>{todo.created_at}</td>
                  <td>
                    <Link to={`/todos/${todo.id}`} className="btn btn-primary">
                      View
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center text-danger" colSpan={100}>
                  No Data Available.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
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
