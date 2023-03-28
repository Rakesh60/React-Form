import React from "react";
import { useState, useEffect } from "react";

function Form() {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log("Registered");
  }, [flag]);

  function handelData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }
  function handelSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All fields are mandatory");
    } else {
      setFlag(true);
    }
  }

  return (
    <>
      <div>
        <form className="container" onSubmit={handelSubmit}>
          <div className="header">
            <h1>Registration Form</h1>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter user name "
              name="name"
              value={inputData.name}
              onChange={handelData}
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter email "
              name="email"
              value={inputData.email}
              onChange={handelData}
            ></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter password"
              name="password"
              value={inputData.password}
              onChange={handelData}
            ></input>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      {flag ? <h1>✔️{inputData.name} You Are Successfully Registered</h1> : ""}
    </>
  );
}

export default Form;
