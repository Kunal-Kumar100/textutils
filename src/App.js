import "./App.css";
import About from "./Components/About";
import TextForm from "./Components/TextForm";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
// import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [btnText, setbtnText] = useState("Enable Dark Mode");
  const [box, setbox] = useState("");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setbox("disabled");
      setbtnText("Enable Light Mode");
      document.body.style.backgroundColor = "#09092e";
      showAlert("Dark Mode has been Enabled", "success");
    } else {
      setMode("light");
      setbox("");
      setbtnText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Textutils"
          mode={mode}
          toggleMode={toggleMode}
          btnText={btnText}
          box={box}
        />
        <div style={{ height: 40 }}>
          <Alert alert={alert} />
        </div>
        <div className="container py10">
          <Routes>
            <Route
              path="/about"
              element={
                <About mode={mode} toggleMode={toggleMode} btnText={btnText} />
              }
            />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text Here"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
