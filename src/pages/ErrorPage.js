import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <section className="error_Page">
        <div className="container">
          <div className="content">
            <h1>404 Error</h1>
            <p>
              Page is Not Found <br /> Please Check Your URL
            </p>
            <p>Back to Home Page</p>
            <Link to="/" className="globalBtnFill">
              Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
