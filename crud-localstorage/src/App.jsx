import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Display from "./display";

function Home() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState(0);
  const [formdata, setFormdata] = useState(null);
  const navigate = useNavigate("");

  const formSubmit = () => {
    setFormdata({
      fname: fname,
      lname: lname,
      age: age,
    });
  };

  useEffect(() => {
    if (formdata == null) return;
    localStorage.setItem("crud", JSON.stringify(formdata));
    navigate("/display");
  },[formdata]);

  return (
    <div className="form">
      <div className="container">
        <h2>Registration Form</h2>

        <form>
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            onChange={(e) => {
              setFname(e.target.value);
            }}
          />

          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            onChange={(e) => {
              setLname(e.target.value);
            }}
          />

          <label>Age</label>
          <input
            type="number"
            placeholder="Enter Age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />

          <button type="submit" onClick={formSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </>
  );
}

export default App;
