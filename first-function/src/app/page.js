"use client";
import React, { useState, useRef } from "react";
import Layout from "./layout.js";
import CodeEditor from "./components/codePlayground.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function Page() {
  const [htmlCode, setHtmlCode] = useState(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Web Page</title>
    </head>
    <body>
      <h1>Hello, World!</h1>
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

  const [output, setOutput] = useState("");
  const iframeRef = useRef(null);

  const handleRunCode = () => {
    // Combine the HTML, CSS, and JavaScript code into a single string
    const combinedCode = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
        <script>${jsCode}</script>
      </body>
      </html>
    `;
  
    // Get the iframe element
    const iframe = iframeRef.current;
    
    // Set up the load event listener before changing the srcdoc
    iframe.onload = () => {
      try {
        const outputElement = iframe.contentDocument.body;
        if (outputElement) {
          setOutput(outputElement.innerHTML);
        } else {
          setOutput("Error: Unable to access iframe content.");
        }
      } catch (error) {
        setOutput(`Error: ${error.message}`);
      }
    };
  
    // Set the srcdoc to trigger the load event
    iframe.srcdoc = combinedCode;
  };

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
      <iframe 
      ref={iframeRef} 
      style={{display: 'none'}} 
      sandbox="allow-scripts"
      title="Code Output"
    />
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