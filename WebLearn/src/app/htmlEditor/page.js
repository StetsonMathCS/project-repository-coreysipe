"use client";
import React, { useState, useRef, useEffect } from "react";
import Layout from "../layout.js";
import CodeEditor from "../components/codePlaygroundLg.tsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

const challenges = [
  {
    id: 1,
    title: "Header Sizing Practice with Paragraphs",
    description:
      "Create an HTML page utilizing two different header tags and two different paragraph tags. The headers should be different sizes and the paragraphs should have different text.",
    hint: "Use the <h1>, <h2>, <p>, and <p> tags to create the headers and paragraphs.",
    initialHtml: `
<!DOCTYPE html>
<html>
<head>
    <title>Header Sizing Practice</title>
</head>
<body>
    <!-- Add your headers and paragraphs here -->
</body>
</html>
    `,
  },
  {
    id: 2,
    title: "Movie List Challenge",
    description:
      "Create an HTML page that displays a list of your favorite movies. Each movie should have a title, a brief description, and a link to the movie's IMDB page. Make the background a color of your choice and log to the console a test message.",
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
  },
];

function Page() {
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [htmlCode, setHtmlCode] = useState(challenges[0].initialHtml);

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
  }, [currentChallengeIndex]);

  const currentChallenge = challenges[currentChallengeIndex];

  return (
    <Layout>
      <div className="d-flex flex-column vh-100">
        <main className="flex-grow-1 overflow-hidden">
          <div className="container-fluid h-100 g-0">
            <div className="row h-100 g-0">
              <div className="col-2">
                <h1 className="mx-2">WebLearn</h1>
                <h2 className="mx-2">Practice Modes</h2>
                <p>
                  <a href="#" className="btn btn-secondary d-block mx-2 py-1">
                    HTML
                  </a>
                </p>
                <p>
                  <a
                    href="/htmlCssEditor"
                    className="btn btn-secondary d-block mx-2 py-1"
                  >
                    HTML & CSS
                  </a>
                </p>
                <p>
                  <a href="../" className="btn btn-secondary d-block mx-2 py-1">
                    HTML, CSS & JavaScript
                  </a>
                </p>
                <p>
                  <a
                    href="/education"
                    className="btn btn-secondary d-block mx-2 py-1"
                  >
                    Educational Content
                  </a>
                </p>
                <div className="challenges-container mx-2 mt-auto">
                  <div className="challenges-navigation">
                    <button
                      onClick={handlePrevChallenge}
                      className="btn btn-secondary me-2"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNextChallenge}
                      className="btn btn-secondary"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                  <h3>Challenge #{currentChallenge.id}:</h3>
                  <div style={{ height: "200px", overflow: "auto" }}>
                    <p>{currentChallenge.description}</p>
                    <h4>Hint:</h4>
                    <p>{currentChallenge.hint}</p>
                  </div>
                  <p>
                    <button
                      className="btn btn-secondary py-1 d-block w-100"
                      onClick={handleRunCode}
                    >
                      Run Code
                    </button>
                  </p>
                </div>
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
