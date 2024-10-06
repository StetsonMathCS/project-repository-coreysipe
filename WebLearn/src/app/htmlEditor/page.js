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
    complexity: "Complexity:  ★☆☆☆☆",
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
    complexity: "Complexity:  ★★☆☆☆",
    description:
      "Create an HTML page that displays a list of your favorite movies. Each movie should have a title, a brief description, and a link to the movie's IMDB page. You should have at least 2 movies in your list.",
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
  {
    id: 3,
    title: "Iframe Challenge",
    complexity: "Complexity:  ★★☆☆☆",
    description:
      "Create an HTML page that uses two iframes with one displaying a YouTube video and the other displaying a Wikipedia page.",
    hint: "Use the <iframe> tag to embed the YouTube video and Wikipedia page.",
    initialHtml: `
<!DOCTYPE html>
<html>
  <head>
      <title>Iframe Challenge</title>
  </head>
  <body>
      <!-- Add your iframes here -->
  </body>
</html>
    `,
  },
  {
    id: 4,
    title: "Calendar and Login Form Challenge",
    complexity: "Complexity:  ★★★☆☆",
    description:
      "Create an HTML page that displays a calendar and a login form. The calendar should show the current month and year. The login form should have fields for a username and password.",
    hint: "Use the <table> tag to create the calendar and the <form> tag to create the login form.",
    initialHtml: `
<!DOCTYPE html>
<html>
<head>
    <title>Calendar and Login Form</title>
</head>
<body>
    <!-- Add your calendar and login form here -->
</body>
</html>
    `,
  },
  {
    id: 5,
    title: "Inline styling Div Challenge",
    complexity: "Complexity:  ★★★☆☆",
    description:
      "Create an HTML page that has a div with text inside of it. The div should have a background color, text color, and padding. The text should be centered in the div.",
    hint: "Use the <div> tag to create the div and use the style attribute to add the styling.",
    initialHtml: `
<!DOCTYPE html>
<html>
<head>
    <title>Inline Styling Div</title>
</head>
<body>
    <!-- Add your styled div here -->
</body>
</html>
    `,
  },
];

function Page() {
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [htmlCode, setHtmlCode] = useState(challenges[0].initialHtml);

  const iframeRef = useRef(null);
  const challengesContainerRef = useRef(null);

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
    adjustChallengesContainerHeight();
    window.addEventListener("resize", adjustChallengesContainerHeight);
    return () =>
      window.removeEventListener("resize", adjustChallengesContainerHeight);
  }, []);

  const adjustChallengesContainerHeight = () => {
    if (challengesContainerRef.current) {
      const windowHeight = window.innerHeight;
      const containerTop = challengesContainerRef.current.offsetTop;
      const footerHeight = windowHeight * 0.1;
      const newHeight = windowHeight - containerTop - footerHeight;
      challengesContainerRef.current.style.height = `${newHeight}px`;
    }
  };

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
      <title>WebLearn HTML Practice</title>
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
                <div
                  className="challenges-container mx-2 flex-grow-1 d-flex flex-column"
                  ref={challengesContainerRef}
                >
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
                  <div className="flex-grow-1 overflow-auto">
                    <p>{currentChallenge.complexity}</p>
                    <p>{currentChallenge.description}</p>
                    <h4>Hint:</h4>
                    <p>{currentChallenge.hint}</p>
                  </div>
                  <p className="mt-2">
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
