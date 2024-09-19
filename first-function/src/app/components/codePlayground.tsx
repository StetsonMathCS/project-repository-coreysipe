import React, { useState, useRef } from "react";
import Editor, { useMonaco, loader } from "@monaco-editor/react";

const CodeEditor = ({ selectedLanguage }) => {
  const [code, setCode] = useState("");
  const iframeRef = useRef(null);

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

    // Create a new iframe to execute the combined code
    const iframe = iframeRef.current;
    iframe.contentDocument.open();
    iframe.contentDocument.write(combinedCode);
    iframe.contentDocument.close();

    // Get the output from the iframe and update the state
    const outputElement = iframe.contentDocument.querySelector("body");
    setOutput(outputElement.innerHTML);
  };

  return (
    <div className="code-editor-container">
      <Editor
        height="45vh"
        width="100%"
        defaultValue={code}
        language={selectedLanguage}
        theme="vs-dark"
        onChange={(value) => setCode(value)}
      />
    </div>
  );
};

export default CodeEditor;
