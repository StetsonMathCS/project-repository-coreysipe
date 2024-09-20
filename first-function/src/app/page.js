"use client";
import React, { useState, useRef, useEffect } from "react";
import Layout from "./layout.js";
import CodeEditor from "./components/codePlayground.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

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

  const [cssCode, setCssCode] = useState(`
body {
  font-family: Arial, sans-serif;
  text-align: center;
}
  `);

  const [jsCode, setJsCode] = useState(`
console.log('Hello from JavaScript!');
  `);

  const iframeRef = useRef(null);

  const handleRunCode = () => {
    const iframe = iframeRef.current;
    const document = iframe.contentDocument || iframe.contentWindow.document;

    // Combine the HTML, CSS, and JavaScript code into a single string
    const combinedCode = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
        <script>${jsCode}<\/script>
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
              <h4>Language Select</h4>
              <button className="py-1">Coding Levels</button>
              <button className="py-1">Educational Content</button>
              <button className="py-1" onClick={handleRunCode}>Run Code</button>
            </div>
            <div className="col-10">
              <div className="row h-50 g-0">
                <div className="col-6">
                  <CodeEditor 
                    defaultValue={htmlCode} 
                    selectedLanguage="html" 
                    onCodeChange={setHtmlCode}
                  />
                </div>
                <div className="col-6">
                  <CodeEditor 
                    defaultValue={cssCode} 
                    selectedLanguage="css" 
                    onCodeChange={setCssCode}
                  />
                </div>
              </div>
              <div className="row h-50 g-0">
                <div className="col-6">
                  <CodeEditor 
                    defaultValue={jsCode} 
                    selectedLanguage="javascript" 
                    onCodeChange={setJsCode}
                  />
                </div>
                <div className="col-6">
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
