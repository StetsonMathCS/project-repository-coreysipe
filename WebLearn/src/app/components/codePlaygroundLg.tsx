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
    <div
      className="code-editor-container relative"
      style={{ border: "1px solid black" }}
    >
      <div className="language-tab absolute top-0 left-0 bg-gray-700 px-2 py-1 rounded-br z-10">
        {selectedLanguage.toUpperCase()}
      </div>
      <Editor
        height="90vh"
        width="100%"
        value={code}
        language={selectedLanguage}
        theme="vs-dark"
        onChange={handleEditorChange}
        options={{
          padding: { top: 20 },
        }}
      />
    </div>
  );
};

export default CodeEditor;
