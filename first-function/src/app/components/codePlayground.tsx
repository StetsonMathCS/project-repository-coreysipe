import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ selectedLanguage, defaultValue, onCodeChange }) => {
  const [code, setCode] = useState(defaultValue);

  useEffect(() => {
    setCode(defaultValue);
  }, [defaultValue, selectedLanguage]);

  const handleEditorChange = (value) => {
    setCode(value);
    onCodeChange(value);
  };

  return (
    <div className="code-editor-container">
      <Editor
        height="45vh"
        width="100%"
        value={code}
        language={selectedLanguage}
        theme="vs-dark"
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditor;