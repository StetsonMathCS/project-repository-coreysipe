"use client";
import React, { useState } from "react";
import Layout from "./layout.js";
import CodeEditor from "./components/codePlayground.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function Page() {
  const [output, setOutput] = useState("Hello World!");

  return (
    <Layout>
      <main>
        <div className="container-fluid g-0">
          <div className="row h-100 g-0">
            <div className="col-2">
              <h4>Level 1</h4>
              <p>Task: Create a basic hello world print.</p>
              <p>Hint: Don't forget to close your tags!</p>
              <button>Run Code</button>
            </div>
            <div className="col-10">
              <div className="row h-50">
                <div className="col-6">
                  <CodeEditor selectedLanguage="html" />
                </div>
                <div className="col-6">
                  <CodeEditor selectedLanguage="css" />
                </div>
              </div>
              <div className="row h-50">
                <div className="col-6 py-1">
                  <CodeEditor selectedLanguage="javascript" />
                </div>
                <div className="col-6 py-1">
                  <div className="output-panel">
                    <div className="box4 output">{output}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <p>
            Designed & Developed by Corey Sipe. Have a suggestion or critique?
            <a href="#"> Fill out a feedback form!</a>
          </p>
        </footer>
      </main>
    </Layout>
  );
}

export default Page;
