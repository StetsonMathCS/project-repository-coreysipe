"use client";
import React, { useState, useRef, useEffect } from "react";
import Layout from "../layout.js";
import CodeEditor from "../components/codePlaygroundMd.tsx";
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
    <h1>Hello from HTML & CSS!</h1>
  </body>
</html>
  `);

  const [cssCode, setCssCode] = useState(`
body {
  font-family: Arial, sans-serif;
  text-align: center;
}
  `);

  const iframeRef = useRef(null);

  const handleRunCode = () => {
    const iframe = iframeRef.current;
    const document = iframe.contentDocument || iframe.contentWindow.document;

    // Combine the HTML, and CSS into one string
    const combinedCode = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
      </body>
      </html>
    `;

    // Write the combined code to the iframe
    document.open();
    document.write(combinedCode);
    document.close();
  };

  useEffect(() => {
    handleRunCode();
  }, []);

  return (
    <Layout>
      <main>
        <div className="container-fluid g-0">
          <div className="row h-100 g-0">
            <div className="col-2">
              <h4 className="ms-1 me-1">Language Select</h4>
              <p>
                <a
                  href="../htmlEditor"
                  className="btn btn-primary ms-1 me-1 py-1"
                >
                  HTML
                </a>
              </p>
              <p>
                <a href="#" className="btn btn-primary ms-1 me-1 py-1">
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
                  className="btn btn-primary ms-1 py-1"
                  onClick={handleRunCode}
                >
                  Run Code
                </button>
                <br />
              </p>
            </div>
            <div class="col-5">
              <CodeEditor
                defaultValue={htmlCode}
                selectedLanguage="html"
                onCodeChange={setHtmlCode}
              />
              <CodeEditor
                defaultValue={cssCode}
                selectedLanguage="css"
                onCodeChange={setCssCode}
              />
            </div>
            <div class="col-5">
              <div className="output-panel">
                <iframe
                  ref={iframeRef}
                  className="box4 output"
                  style={{ width: "100%", height: "45vh", border: "none" }}
                />
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
    </Layout>
  );
}

export default Page;
