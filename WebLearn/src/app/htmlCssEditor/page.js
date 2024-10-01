"use client";
import React, { useState, useRef, useEffect } from "react";
import Layout from "../layout.js";
import CodeEditor from "../components/codePlaygroundMd.tsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

const challenges = [
  {
    id: 1,
    title: "Create a Simple Web Page",
    complexity: "Complexity:  ★☆☆☆☆",
    description:
      "Create a simple web page that displays your favorite quote. Use HTML to structure the page and CSS to style the text.",
    hint: "Use the <h1> tag to display the quote as the heading. You can use CSS to change the font, color, and alignment of the text.",
    initialHtml: `
<!DOCTYPE html>
<html>
<head>
  <title>My Favorite Quote</title>
</head>
<body>
  <h1>Insert your favorite quote here</h1>
</body>
</html>
  `,
    initialCss: `
/* Add your CSS styles here */
  `,
  },
  {
    id: 2,
    title: "Create a Simple Card",
    complexity: "Complexity:  ★★☆☆☆",
    description:
      "Create a simple card that displays information about a fictional product. Use HTML to structure the card and CSS to style the elements.",
    hint: "Use <div> elements to create the card structure. You can use CSS to add borders, padding, and background color to the card.",
    initialHtml: `
<!DOCTYPE html>
<html>
<head>
  <title>Product Card</title>
</head>
<body>
  <div class="card">
    <h2>Product Name</h2>
    <p>Description of the product</p>
    <button>Buy Now</button>
  </div>
</body>
</html>
  `,
    initialCss: `
/* Add your CSS styles here */
.card {
  /* Add your card styles here */
}
  `,
  },
];

function Page() {
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [htmlCode, setHtmlCode] = useState(challenges[0].initialHtml);
  const [cssCode, setCssCode] = useState(challenges[0].initialCss);

  const iframeRef = useRef(null);
  const challengesContainerRef = useRef(null);

  const handleRunCode = () => {
    const iframe = iframeRef.current;
    const document = iframe.contentDocument || iframe.contentWindow.document;

    const combinedCode = `
        <style>${cssCode}</style>
        ${htmlCode}
    `;

    document.open();
    document.write(combinedCode);
    document.close();
  };

  useEffect(() => {
    handleRunCode();
    adjustChallengesContainerHeight();
    window.addEventListener('resize', adjustChallengesContainerHeight);
    return () => window.removeEventListener('resize', adjustChallengesContainerHeight);
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
    setCssCode(currentChallenge.initialCss);
  }, [currentChallengeIndex]);

  const currentChallenge = challenges[currentChallengeIndex];

  return (
    <Layout>
      <title>WebLearn HTML & CSS </title>
      <main>
        <div className="container-fluid g-0">
          <div className="row h-100 g-0">
            <div className="col-2">
              <h1 className="mx-2">WebLearn</h1>
              <h2 className="mx-2">Practice Modes</h2>
              <p>
                <a
                  href="/htmlEditor"
                  className="btn btn-secondary d-block mx-2 py-1"
                >
                  HTML
                </a>
              </p>
              <p>
                <a href="#" className="btn btn-secondary d-block mx-2 py-1">
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
              <div className="challenges-container mx-2 flex-grow-1 d-flex flex-column" ref={challengesContainerRef}>
                <div className="challenges-navigation">
                  <button onClick={handlePrevChallenge} className="btn btn-secondary me-2">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={handleNextChallenge} className="btn btn-secondary">
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
                  <button className="btn btn-secondary py-1 d-block w-100" onClick={handleRunCode}>
                    Run Code
                  </button>
                </p>
              </div>
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
