const NotFound = () => {
  return (
    <div className="container text-center mt-5">

      <h1 className="display-1 fw-bold text-danger">
        404
      </h1>

      <h2>Page Not Found</h2>

      <p className="text-muted">
        Sorry, the page you are looking for does not exist.
      </p>

      <a href="/dashboard" className="btn btn-primary">
        Go to Dashboard
      </a>

    </div>
  );
};

export default NotFound;