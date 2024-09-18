"use client";
import React, { useState } from "react";
import Layout from "./layout.js";
import Playground from "./components/codePlayground.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function Page() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("Hello World!");
  const [errors, setErrors] = useState([]);

  // ... other code ...

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="navigation-menu box1 col-md-3">
            <ul>
              <li>First Function</li>
              <ul>
                <li>Language Select</li>
                <ul>
                  <li>
                    <button>C++</button>
                  </li>
                  <li>
                    <button>Java</button>
                  </li>
                  <li>
                    <button>JavaScript</button>
                  </li>
                  <li>
                    <button>Python</button>
                  </li>
                </ul>
                <li>
                  <button>Coding Practice</button>
                </li>
                <li>
                  <button>Learning Material</button>
                </li>
              </ul>
            </ul>
          </div>
          <div className="box2 col-md-6">
            <Playground/>
          </div>
          <div className="box3 col-md-3">
            <h4>Level 1</h4>
            <p>
              Task: Create a basic snippet of code that prints "Hello World!"
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
