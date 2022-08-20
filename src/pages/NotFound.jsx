import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="text-center mt-3">
        <h3>404 | NOT FOUND</h3>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
