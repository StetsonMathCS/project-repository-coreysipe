"use client";
import React, { useState, useRef, useEffect } from "react";
import Layout from "../layout.js";
import CodeEditor from "../components/codePlaygroundLg.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

function Page() {
  const [htmlCode, setHtmlCode] = useState(`
<!DOCTYPE html>
<html>
<head>
    <title>Code Playground</title>
  </head>
  <body>
    <h1>Hello from HTML!</h1>
  </body>
</html>
  `);

  const iframeRef = useRef(null);

  const handleRunCode = () => {
    const iframe = iframeRef.current;
    const document = iframe.contentDocument || iframe.contentWindow.document;

    const combinedCode = `
        ${htmlCode}
    `;

    document.open();
    document.write(combinedCode);
    document.close();
  };

  useEffect(() => {
    handleRunCode();
  }, []);

  return (
    <Layout>
      <div className="d-flex flex-column vh-100">
        <main className="flex-grow-1 overflow-hidden">
          <div className="container-fluid h-100 g-0">
            <div className="row h-100 g-0">
              <div className="col-2 h-100 overflow-auto">
                <h4 className="ms-1 me-1">Language Select</h4>
                <p>
                  <a href="#" className="btn btn-primary ms-1 me-1 py-1">
                    HTML
                  </a>
                </p>
                <p>
                  <a
                    href="../htmlCssEditor"
                    className="btn btn-primary ms-1 me-1 py-1"
                  >
                    HTML & CSS
                  </a>
                </p>
                <p>
                  <a href="../" className="btn btn-primary ms-1 me-1 py-1">
                    HTML, CSS & JavaScript
                  </a>
                </p>
                <p>
                  <a
                    href="../education"
                    className="btn btn-primary ms-1 me-1 py-1"
                  >
                    Educational Content
                  </a>
                </p>
                <p>
                  <button
                    className="btn btn-primary ms-1 me-1 py-1"
                    onClick={handleRunCode}
                  >
                    Run Code
                  </button>
                </p>
              </div>
              <div className="col-5 h-100">
                <CodeEditor
                  defaultValue={htmlCode}
                  selectedLanguage="html"
                  onCodeChange={setHtmlCode}
                />
              </div>
              <div className="col-5 h-100">
                <div className="output-panel h-100">
                  <iframe ref={iframeRef} className="w-100 h-100 border-0" />
                </div>
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
      </div>
    </Layout>
  );
}

export default Page;
