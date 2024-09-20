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
              <h4>Language Select</h4>
              <button className="py-1">Coding Levels</button>
              <button className="py-1">Educational Content</button>
              <button className="py-1">Run Code</button>
            </div>
            <div className="col-10">
              <div className="row h-50 g-0">
                <div className="col-6">
                  <CodeEditor selectedLanguage="html" />
                </div>
                <div className="col-6">
                  <CodeEditor selectedLanguage="css" />
                </div>
              </div>
              <div className="row h-50 g-0">
                <div className="col-6">
                  <CodeEditor selectedLanguage="javascript" />
                </div>
                <div className="col-6 ">
                  <div className="output-panel">
                    <div className="box4 output">{output}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p className="m-0 py-3">
          Designed & Developed by Corey Sipe. Have a suggestion or critique?
          <a href="#"> Fill out a feedback form!</a>
        </p>
      </footer>
    </Layout>
  );
}

export default Page;
