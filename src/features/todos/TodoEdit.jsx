import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useUpdateTodoMutation, useGetTodoQuery } from "../api/apiSlice";
import { useParams } from "react-router-dom";

export default function TodoEdit() {
  const { todoId } = useParams();
  const [state, setState] = useState({});
  const [errors, setErrors] = useState({});
  const [updateTodo, { isLoading }] = useUpdateTodoMutation();
  const { data, isFetching, isError } = useGetTodoQuery(todoId);

  useEffect(() => {
    setState(data?.data ?? {});
  }, [data]);

  const handleInput = (event) => {
    setState((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const handleForm = async (event) => {
    event.preventDefault();

    setErrors({});

    try {
      await updateTodo(state).unwrap();
      alert("Todo Updated.");
    } catch (err) {
      setErrors(err.data?.errors ?? {});
    }
  };

  if (isFetching) {
    return <p className="text-center text-danger m-2">Loading...</p>;
  }

  if (isError) {
    return <p className="text-center text-danger m-2">Not Found</p>;
  }

  return (
    <>
      <div className="container">
        <h2>Edit Todo</h2>
        {isLoading && (
          <p className="text-center text-danger m-2">Please wait...</p>
        )}
        <Form onSubmit={handleForm}>
          <fieldset disabled={isLoading}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={state.title ?? ""}
                onChange={handleInput}
              />
              {errors.title && (
                <div className="text-danger">{errors.title}</div>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="note">
              <Form.Label>Note</Form.Label>
              <Form.Control
                type="text"
                name="note"
                value={state.note ?? ""}
                onChange={handleInput}
              />
              {errors.note && <div className="text-danger">{errors.note}</div>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="comment">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                type="text"
                name="comment"
                value={state.comment ?? ""}
                onChange={handleInput}
              />
              {errors.comment && (
                <div className="text-danger">{errors.comment}</div>
              )}
            </Form.Group>

            <Button type="sumit" variant="primary">
              Submit
            </Button>
          </fieldset>
        </Form>
      </div>
    </>
  );
}
