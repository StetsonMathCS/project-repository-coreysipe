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
      <div className="container-fluid d-flex flex-row min-vh-100">
        <div className="box1 navigation-menu col-md-2">
          <ul>
            <li>First Function</li>
            <ul>
              <li>Language Select</li>
              <ul>
                <li><button>C++</button></li>
                <li><button>Java</button></li>
                <li><button>JavaScript</button></li>
                <li><button>Python</button></li>
              </ul>
              <li><button>Coding Practice</button></li>
              <li><button>Learning Material</button></li>
            </ul>
          </ul>
        </div>
        <div className="col-md-8 d-flex flex-row">
          <div className="col-md-6">
            <Playground />
          </div>
          <div className="box2 col-md-8">
            <div className="output">{output}</div>
          </div>
        </div>
        <div className="box3 col-md-2">
          <h4>Level 1</h4>
          <p>Task: Create a basic snippet of code that prints "Hello World!"</p>
          <p>Hint: Don't forget to close your tags</p>
          <button>Run your code</button>
        </div>
      </div>
    </Layout>
  );
}

export default Page;