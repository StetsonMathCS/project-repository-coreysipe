"use client";
import React, { useState, useRef, useEffect } from "react";
import Layout from "./layout.js";
import CodeEditor from "./components/codePlaygroundMd.tsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const challenges = [
  {
    id: 1,
    title: "Movie List Challenge",
    description: "Create an HTML page that displays a list of your favorite movies. Each movie should have a title, a brief description, and a link to the movie's IMDB page. Make the background a color of your choice and log to the console a test message.",
    hint: "Use the <ul> and <li> tags to create a list of movies. You can use the <a> tag to create a link to the IMDB pages.",
    initialHtml: `
<!DOCTYPE html>
<html>
<head>
    <title>Favorite Movies</title>
</head>
<body>
    <h1>My Favorite Movies</h1>
    <!-- Add your movie list here -->
</body>
</html>
    `,
    initialCss: `
body {
    font-family: Arial, sans-serif;
    /* Add your background color here */
}
    `,
    initialJs: `
console.log('Movie list loaded!');
    `
  },
  {
    id: 2,
    title: "Interactive Button Challenge",
    description: "Create a button that changes color when clicked. Use HTML for the button structure, CSS for initial styling, and JavaScript to handle the click event and color change.",
    hint: "Use addEventListener in JavaScript to detect clicks on the button. You can change the button's style directly in the event handler.",
    initialHtml: `
<!DOCTYPE html>
<html>
<head>
    <title>Interactive Button</title>
</head>
<body>
    <button id="colorButton">Click me!</button>
</body>
</html>
    `,
    initialCss: `
#colorButton {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
    `,
    initialJs: `
// Add your JavaScript code here to make the button interactive
    `
  }
  // Add more challenges as needed
];

function Page() {
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [htmlCode, setHtmlCode] = useState(challenges[0].initialHtml);
  const [cssCode, setCssCode] = useState(challenges[0].initialCss);
  const [jsCode, setJsCode] = useState(challenges[0].initialJs);

  const iframeRef = useRef(null);

  const handleRunCode = () => {
    const iframe = iframeRef.current;
    const document = iframe.contentDocument || iframe.contentWindow.document;

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

    document.open();
    document.write(combinedCode);
    document.close();
  };

  useEffect(() => {
    handleRunCode();
  }, []);

  const handlePrevChallenge = () => {
    setCurrentChallengeIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : challenges.length - 1
    );
  };

  const handleNextChallenge = () => {
    setCurrentChallengeIndex((prevIndex) => 
      prevIndex < challenges.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    const currentChallenge = challenges[currentChallengeIndex];
    setHtmlCode(currentChallenge.initialHtml);
    setCssCode(currentChallenge.initialCss);
    setJsCode(currentChallenge.initialJs);
  }, [currentChallengeIndex]);

  const currentChallenge = challenges[currentChallengeIndex];

  return (
    <Layout>
      <main>
        <div className="container-fluid g-0">
          <div className="row h-100 g-0">
            <div className="col-2 d-flex flex-column">
              <div>
                <h1 className="ms-1 me-1">WebLearn</h1>
                <h2 className="ms-1 me-1">Practice Modes</h2>
                <p>
                  <a
                    href="/htmlEditor"
                    className="btn btn-primary ms-1 me-1 py-1"
                  >
                    HTML
                  </a>
                </p>
                <p>
                  <a
                    href="/htmlCssEditor"
                    className="btn btn-primary ms-1 me-1 py-1"
                  >
                    HTML & CSS
                  </a>
                </p>
                <p>
                  <a href="#" className="btn btn-primary ms-1 me-1 py-1">
                    HTML, CSS & JavaScript
                  </a>
                </p>
                <p>
                  <a href="/education" className="btn btn-primary ms-1 me-1 py-1">
                    Educational Content
                  </a>
                </p>
              </div>
              <div className="challenges-container mt-auto">
                <div className="challenges-navigation">
                  <button onClick={handlePrevChallenge} className="btn btn-secondary me-2">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={handleNextChallenge} className="btn btn-secondary">
                    <ChevronRight size={20} />
                  </button>
                </div>
                <h3 className="ms-1 me-1">Challenge #{currentChallenge.id}:</h3>
                <p className="ms-1 me-1">{currentChallenge.description}</p>
                <h4 className="ms-1 me-1">Hint:</h4>
                <p className="ms-1 me-1">{currentChallenge.hint}</p>
                <p>
                  <button
                    className="btn btn-primary ms-1 me-1 py-1"
                    onClick={handleRunCode}
                  >
                    Run Code
                  </button>
                </p>
              </div>
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
          <a href="#"> Fill out a feedback form! </a>
          Just because the code can run doesn't mean it is the right way to do
          something.
        </p>
      </footer>
    </Layout>
  );
}

export default Page;