import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PostIndex from "./pages/posts/PostIndex";
import { Container, Nav, Navbar } from "react-bootstrap";

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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<PostIndex />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
