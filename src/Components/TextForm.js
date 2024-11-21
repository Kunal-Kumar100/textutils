import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase!", "success");
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase!", "success");
  };
  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared!", "warning");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to Clipboard!", "success");
  };
  const handleExtraspaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra Spaces Removed!", "info");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "#09092e" : "white" }}>
      <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
        {props.heading}
      </h1>
      <div
        className="mb-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}>
        <textarea
          className="form-control"
          value={text}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "light" ? "black" : "white",
          }}
          onChange={handleOnChange}
          id="mybox"
          rows="12"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
        UpperCase
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
        LowerCase
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleExtraspaces}>
        Remove Extra Spaces
      </button>

      <div
        className="container my-2"
        style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").filter((word) => word.trim() !== "").length} and{" "}
          {text.length}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Write Something To Preview Here"}</p>
      </div>
    </div>
  );
}
