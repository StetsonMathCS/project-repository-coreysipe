"use client";
import React, { useState, useEffect } from "react";
import Layout from "./layout.js";
import Playground from "./components/codePlayground.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function Page() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("Hello World!");
  const [errors, setErrors] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("javascript"); 

  const defaultCodeSnippets = {
    javascript: `
      console.log("A computer is an electronic device that can store, retrieve, and process data, and perform tasks according to a set of instructions.");
    `,
    cpp: `
      #include <iostream>

      using namespace std;

      int main() {
          cout << "A computer is an electronic device that can store, retrieve, and process data, and perform tasks according to a set of instructions.";
          return 0;
      }
    `,
    python: `
      print("A computer is an electronic device that can store, retrieve, and process data, and perform tasks according to a set of instructions.")
    `,
    java: `
  public class ComputerDefinition {
      public static void main(String[] args) {
          System.out.println("A computer is an electronic device that can store, retrieve, and process data, and perform tasks according to a set of instructions.");
      }
  }
`
  };
  
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setCode(defaultCodeSnippets[language] || ""); 
    console.log("Selected language:", selectedLanguage);

  };

  return (
    <Layout>
      <div className="container-fluid d-flex flex-row min-vh-100">
        <div className="box1 navigation-menu col-md-2">
          <ul>
            <li>First Function</li>
            <ul>
              <li>Language Select</li>
              <ul>
                <li><button onClick={() => handleLanguageChange("cpp")}>C++</button></li>
                <li><button onClick={() => handleLanguageChange("java")}>Java</button></li>
                <li><button onClick={() => handleLanguageChange("javascript")}>JavaScript</button></li>
                <li><button onClick={() => handleLanguageChange("python")}>Python</button></li>
              </ul>
              <li><button>Coding Practice</button></li>
              <li><button>Learning Material</button></li>
            </ul>
          </ul>
        </div>
        <div className="col-md-8 d-flex flex-row">
          <div className="col-md-6">
            <Playground code={code} selectedLanguage={selectedLanguage} />
          </div>
          <div className="box2 col-md-6">
            <div className="output">{output}</div>
          </div>
        </div>
        <div className="box3 col-md-2">
          <p>Instructions: Create a simple program that prints your name and class year<br /></p>
          <p>Example of final result: Corey 2025<br /></p>
          <p>Hint: Don't forget to close your tags!</p>
        </div>
      </div>
    </Layout>
  );
}

export default Page;