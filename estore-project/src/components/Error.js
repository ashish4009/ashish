import { useRouteError, Link } from "react-router-dom";

const ErrorComponent = () => {
  const err = useRouteError();
  return (
    <div className="errorPage">
      <h2>Oops!!!</h2>
      <h3>Page {err?.statusText}</h3>
      <Link to="/">GO Home</Link>
    </div>
  );
};

export default ErrorComponent;
