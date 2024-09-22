"use client";
import React, { useState, useRef, useEffect } from "react";
import Layout from "../layout.js";
import CodeEditor from "../components/codePlaygroundMd.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

function Page() {
  return (
    <Layout>
      <main>
        <div className="container-fluid g-0">
          <div className="row h-100 g-0">
            <div className="col-2">
              <h4>Language Select</h4>
              <p>
                <a href="../htmlEditor" className="btn btn-primary py-1">
                  HTML
                </a>
              </p>
              <p>
                <a href="../htmlCssEditor" className="btn btn-primary py-1">
                  HTML & CSS
                </a>
              </p>
              <p>
                <a href="../" className="btn btn-primary py-1">
                  HTML, CSS & JavaScript
                </a>
              </p>
              <p>
                <a href="#" className="btn btn-primary py-1">
                  Educational Content
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p className="m-0 py-3">
          Designed & Developed by Corey Sipe. Have a suggestion or critique?
          <a href="#"> Fill out a feedback form! </a>
          Just because the code can run doesn't mean it is the right way to do
          something.
        </p>
      </footer>
    </Layout>
  );
}

export default Page;
