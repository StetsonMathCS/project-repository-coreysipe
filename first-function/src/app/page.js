"use client";
import React, { useState } from "react";
import Layout from "./layout.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function Page() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [code, setCode] = useState("<h1>Hello World!</h1>");
  const [output, setOutput] = useState("Hello World!");
  const [errors, setErrors] = useState([]);

  // ... other code ...

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="box1 col-md-3">
            Java<br></br>
            Python<br></br>
            JavaScript<br></br>
            C++<br></br>
          </div>
          <div className="box2 col-md-6">
            <textarea rows="5" cols="30" value={code}></textarea>
          </div>
          <div className="box3 col-md-3">
            <h4>Level 1</h4>
            <p>
              Task:Create a basic HTML page that utilizes any size header saying
              Hello World!
            </p>
            <p>Hint: Don't forget to close your tags</p>
            <button>Submit</button>
            <div className="box4 output">{output}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Page;
