import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PostIndex from "./pages/posts/PostIndex";
import { Container, Nav, Navbar } from "react-bootstrap";
import { TodosList } from "./features/todos/TodosList";
import { TodoView } from "./features/todos/TodoView";
import TodoCreate from "./features/todos/TodoCreate";
import TodoEdit from "./features/todos/TodoEdit";

function App() {
  return (
    <>
      <Navbar bg="success" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">
            React-Redux
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/posts" className="nav-link">
                Post List
              </Link>
              <Link to="/todos/create" className="nav-link">
                New Todo
              </Link>
              <Link to="/todos" className="nav-link">
                Todo List
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<PostIndex />} />
        <Route path="todos" element={<TodosList />} />
        <Route path="todos/create" element={<TodoCreate />} />
        <Route path="todos/:todoId" element={<TodoView />} />
        <Route path="todos/:todoId/edit" element={<TodoEdit />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
