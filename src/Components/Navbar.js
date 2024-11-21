import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse border-0"
          id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link active border border-${
                  props.mode === "light" ? "white" : "light"
                } border-top-0 my-1 mx-1`}
                style={{ textAlign: "center" }}
                aria-current="page"
                to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link active border border-${
                  props.mode === "light" ? "white" : "light"
                } border-top-0 my-1 mx-1`}
                style={{ textAlign: "center" }}
                aria-current="page"
                to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className={"form-check form-switch"} onClick={props.toggleMode}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            onChange={null}
            id="flexSwitchCheckCheckedDisabled"
            checked={props.box}
            onClick={props.toggleMode}
          />
          <label
            className="form-check-label"
            style={{ color: props.mode === "light" ? "black" : "white" }}
            onClick={props.toggleMode}
            htmlFor="flexSwitchCheckCheckedDisabled">
            {props.btnText}
          </label>
        </div>
      </div>
    </nav>
  );
}
