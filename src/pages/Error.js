import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <h2>404 Error</h2>
      <h3>Page Not Found</h3>
      <Link to="/" className="btn">
        Go To Home
      </Link>
    </section>
  );
};
export default Error;
