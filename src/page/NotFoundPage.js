import React from "react";
import { Link } from "react-router-dom";
import Error1 from "../assets/error1.png";
import Button from "../components/Button";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="error">
      <div className="error-head">
        <p>Home</p>
        <p className="error-faded">/404</p>
      </div>
      <div className="error-container">
        <div className="error-img">
          <img src={Error1} alt="404" />
        </div>
        <div className="error-content">
          <div className="error-title">
            <h3>Oops...</h3>
          </div>
          <div className="error-desc">
            <p>
              we interviewed every surfer on the coast, but none of them know
              where this page went
            </p>
          </div>
          <Link to="/">
            <Button text="Go to catalog" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
