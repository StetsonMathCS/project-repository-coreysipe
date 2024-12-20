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
    title: "Form Alert Multiplication Challenge",
    complexity: "Complexity:  ★★☆☆☆",
    description:
      "Create an HTML form that multiplies two numbers and displays the result in an alert box when the form is submitted. Use HTML for the form structure, CSS for initial styling, and JavaScript to handle the form submission.",
    hint: "Use the <form> tag to create the form. You can use the onsubmit event in JavaScript to handle the form submission.",
    initialHtml: `
<!DOCTYPE html>
<html>
<head>
    <title>Form Alert Multiplication</title>
</head>
<body>
    <form id="multiplicationForm">
        <label for="num1">Number 1:</label>
        <input type="number" id="num1" name="num1" required>
        <label for="num2">Number 2:</label>
        <input type="number" id="num2" name="num2" required>
        <button type="submit">Multiply</button>
    </form>
</body>
</html>
    `,
    initialCss: `
body {
    font-family: Arial, sans-serif;
    display: flex;
}
    `,
    initialJs: `
// Add your JavaScript code here to handle the form submission
    `,
  },
  {
    id: 2,
    title: "Modal windows & popups",
    complexity: "Complexity:  ★★★☆☆",
    description:
      "Create a modal window that pops up when a button is clicked. Use HTML for the button and modal structure, CSS for initial styling, and JavaScript to show and hide the modal.",
    hint: "Use the <button> tag to create the button that opens the modal. You can use CSS to style the modal window and JavaScript to show and hide it.",
    initialHtml: `
<!DOCTYPE html>
<html>
<head>
    <title>Modal Window</title>
</head>
<body>
    <button id="openModalButton">Open Modal</button>
    <div id="modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>This is a modal window</p>
        </div>
    </div>
</body>
</html>
    `,
    initialCss: `
/* Add your CSS styles here */
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
}
    `,
    initialJs: `
// Add your JavaScript code here to show and hide the modal
    `,
  },
  {
    id: 3,
    title: "Navigation menu Practice",
    complexity: "Complexity:  ★★★☆☆",
    description:
      "Create a navigation menu with at least 3 links. Style the menu using CSS. Make visibility of the menu toggle when a button is clicked.",
    hint: "Use the <ul> and <li> tags to create the navigation menu. You can use CSS to style the menu and JavaScript to toggle its visibility.",
    initialHtml: `
<!DOCTYPE html>
<html>
<head>
    <title>Navigation Menu</title>
</head>
<body>
    <button id="toggleMenuButton">Toggle Menu</button>
    <ul id="menu" class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</body>
</html>
    `,
    initialCss: `
/* Add your CSS styles here */
.menu {
    display: none;
    list-style-type: none;
    padding: 0; 
}
    `,
    initialJs: `
// Add your JavaScript code here to toggle the menu visibility
    `,
  },
  {
    id: 4,
    title: "Accordion Practice",
    complexity: "Complexity:  ★★★★☆",
    description:
      "Create an accordion that expands and collapses when the user clicks on the headers. Use HTML for the accordion structure, CSS for initial styling, and JavaScript to handle the click events.",
    hint: "Use the <div> tag to create the accordion. You can use CSS to style the accordion and JavaScript to handle the click events.",
    initialHtml: `
<!DOCTYPE html>
<html>
<head>
    <title>Accordion</title>
</head>
<body> 
    <div class="accordion">
        <div class="accordion-header">Section 1</div>
        <div class="accordion-content">Content 1</div>
        <div class="accordion-header">Section 2</div>
        <div class="accordion-content">Content 2</div>
        <div class="accordion-header">Section 3</div>
        <div class="accordion-content">Content 3</div>
    </div>
</body>
</html>
    `,
    initialCss: `
/* Add your CSS styles here */
.accordion-content {
    display: none;
}
    `,
    initialJs: `
// Add your JavaScript code here to handle the accordion click events
    `,
  },
  {
    id: 5,
    title: "Animate a rotating triangle",
    complexity: "Complexity:  ★★★★★",
    description:
      "Create a triangle using HTML and CSS. Use CSS animations to rotate the triangle 360 degrees when a button is clicked.",
    hint: "Use the <div> tag to create the triangle. You can use CSS to style the triangle and create the animation.",
    initialHtml: `
<!DOCTYPE html>
<html>
<head>
    <title>Rotating Triangle</title>
</head>
<body>
    <div id="triangle"></div>
    <button id="rotateButton">Rotate</button>
</body>
</html>
    `,
    initialCss: `
/* Add your CSS styles here */
#triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid red;
}
    `,
    initialJs: `
// Add your JavaScript code here to rotate the triangle
    `,
  },
  {
    id: 6,
    title: "Event Listeners & Handling",
    complexity: "Complexity: ★★★☆☆",
    description:
      "Create a button that changes its text when clicked. Use HTML for the button structure, CSS for initial styling, and JavaScript to handle the click event.",
    hint: "Use the <button> tag to create the button. You can use the addEventListener method in JavaScript to handle the click event.",
    initialHtml: `
  <!DOCTYPE html>
  <html>
  <head>
      <title>Event Listeners</title>
  </head>
  <body>
      <button id="changeTextButton">Click me</button>
  </body>
  </html>
    `,
    initialCss: `
  /* Add your CSS styles here */
  button {
      padding: 10px 20px;
      font-size: 16px;
  }
    `,
    initialJs: `
  // Add your JavaScript code here to handle the button click event
    `,
  },
  {
    id: 7,
    title: "Utilizing Fetch for APIs",
    complexity: "Complexity: ★★★★★",
    description:
      "Create a button that fetches data from a public API and displays it on the page when clicked. Use HTML for the button structure, CSS for initial styling, and JavaScript to handle the API request.",
    hint: "Use the fetch function in JavaScript to make the API request. You can use the .then() method to handle the response and .catch() to handle any errors. Use the link from the example code for this section to fetch data from.",
    initialHtml: `
  <!DOCTYPE html>
  <html>
  <head>
      <title>Fetch API</title>
  </head>
  <body>
      <button id="fetchDataButton">Fetch Data</button>
      <div id="dataDisplay"></div>
  </body>
  </html>
    `,
    initialCss: `
  /* Add your CSS styles here */
  button {
      padding: 10px 20px;
      font-size: 16px;
  }
  #dataDisplay {
      margin-top: 20px;
      font-size: 14px;
  }
    `,
    initialJs: `
  // Add your JavaScript code here to fetch data from the API and display it
    `,
  }
];

function Page() {
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [htmlCode, setHtmlCode] = useState(challenges[0].initialHtml);
  const [cssCode, setCssCode] = useState(challenges[0].initialCss);
  const [jsCode, setJsCode] = useState(challenges[0].initialJs);

  const iframeRef = useRef(null);
  const challengesContainerRef = useRef(null);

  const handleRunCode = () => {
    const iframe = iframeRef.current;
    const document = iframe.contentDocument || iframe.contentWindow.document;

    const combinedCode = `
        <style>${cssCode}</style>
        ${htmlCode}
        <script>${jsCode}</script>
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
    setCssCode(currentChallenge.initialCss);
    setJsCode(currentChallenge.initialJs);
  }, [currentChallengeIndex]);

  const currentChallenge = challenges[currentChallengeIndex];

  return (
    <Layout>
      <title>WebLearn HTML, CSS & JS</title>
      <div className="d-flex flex-column vh-100">
        <main className="flex-grow-1 overflow-hidden">
          <div className="row h-100 g-0">
            <div className="col-2 navbar-bg d-flex flex-column">
              <div>
              <h2 className="mx-2 navbar-text fs-3">Web Learn</h2>
              <p>
                <a href="/instructLimits" className="btn btncolor d-block mx-2 py-1">
                  Instructions
                </a>
              </p>
              <p>
                <a
                  href="/htmlEditor"
                  className="btn btncolor d-block mx-2 py-1"
                >
                  HTML
                </a>
              </p>
              <p>
                <a
                  href="/htmlCssEditor"
                  className="btn btncolor d-block mx-2 py-1"
                >
                  HTML + CSS
                </a>
              </p>
              <p>
                <a href="#" className="btn btncolor d-block mx-2 py-1">
                  HTML + CSS + JS
                </a>
              </p>
              <p>
                <a
                  href="/education"
                  className="btn btncolor d-block mx-2 py-1"
                >
                  Tutorials
                </a>
              </p>
              </div>
              <div
                className="challenges-container mx-2 flex-grow-1 d-flex flex-column"
                ref={challengesContainerRef}
              >  
                <div className="navbar-text overflow-auto">
                  <div className="d-flex align-items-center justify-content-center">
                    <button
                      onClick={handlePrevChallenge}
                      className="btn btncolor me-2"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNextChallenge}
                      className="btn btncolor ms-2"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                  <div className="flex-grow-1">
                  <h3 className="flex-grow-1 text-center">Challenge #{currentChallenge.id}:</h3>
                    <p>{currentChallenge.complexity}</p>
                    <p>{currentChallenge.description}</p>
                    <h4>Hint:</h4>
                    <p>{currentChallenge.hint}</p>
                  </div>
                </div>
                <p className="mt-2">
                  <button
                    className="btn btncode py-1 d-block w-100"
                    onClick={handleRunCode}
                  >
                    Run Code
                  </button>
                </p>
              </div>
            </div>
            <div className="col-10 h-100">
              <div className="row h-50 g-0">
                <div className="col-6 h-100">
                  <CodeEditor
                    defaultValue={htmlCode}
                    selectedLanguage="html"
                    onCodeChange={setHtmlCode}
                  />
                </div>
                <div className="col-6 h-100">
                  <CodeEditor
                    defaultValue={cssCode}
                    selectedLanguage="css"
                    onCodeChange={setCssCode}
                  />
                </div>
              </div>
              <div className="row h-50 g-0">
                <div className="col-6 h-100">
                  <CodeEditor
                    defaultValue={jsCode}
                    selectedLanguage="javascript"
                    onCodeChange={setJsCode}
                  />
                </div>
                <div className="col-6 h-100">
                  <div className="output-panel h-100">
                    <iframe
                      ref={iframeRef}
                      className="box4 output w-100 h-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer">
          <p className="m-0 py-3">
            Designed & Developed by Corey Sipe. Have a suggestion or critique?
            <a target="_blank" href="https://forms.gle/vAMBqqHPxnH7eX4Q8">
              {" "}
              Fill out a feedback form!{" "}
            </a>
            Just because the code can run doesn't mean it is the right way to do
            something.
          </p>
        </footer>
      </div>
    </Layout>
  );
}

export default Page;
