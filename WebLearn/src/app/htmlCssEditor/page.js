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
    title: "Class and ID Practice",
    complexity: "Complexity:  ★★☆☆☆",
    description:
      "Create a simple card that displays information about a fictional product. Use HTML to structure the card and CSS to style the elements. Use atleast one class and one id in your HTML.",
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
  {
    id: 3,
    title: "Attribute Practice",
    complexity: "Complexity:  ★★★☆☆",
    description:
      "Create anything you want using HTML and CSS. Use at 4 different CSS properties to style the page nicely.",
    hint: "Use the <div> tag to create a container for your content. You can use CSS to style the container and its contents.",
    initialHtml: `
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <div class="container">
      <h1>Welcome to My Page</h1>
      <p>This is a paragraph of text.</p>
      <button>Click Me</button>
    </div>
  </body>
</html>
  `,
    initialCss: `
/* Add your CSS styles here */
.container {
  /* Add your container styles here */
}
  `,
  },
  {
    id: 4,
    title: "Styling buttons and dropdowns Practice",
    complexity: "Complexity:  ★★★☆☆",
    description:
      "Create a webpage that has a button and a dropdown menu. Style the button and dropdown menu using CSS.",
    hint: "Use the <button> and <select> tags to create the button and dropdown menu. You can use CSS to style the button and dropdown menu.",
    initialHtml: `
<!DOCTYPE html>
<html>
  <head>
    <title>Button and Dropdown</title>
  </head>
  <body>
    <button>Click Me</button>
    <select>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option> 
    </select>
  </body>
</html>
  `,
    initialCss: `
/* Add your CSS styles here */
button {
  /* Add your button styles here */
  }`,
  },
  {
    id: 5,
    title: "Flexbox Practice",
    complexity: "Complexity:  ★★★★☆",
    description:
      "Create a webpage that uses flexbox to layout elements. Use flexbox properties to create a responsive layout.",
    hint: "Use the <div> tag to create containers for your content. You can use CSS and flexbox properties to create the layout.",
    initialHtml: `
<!DOCTYPE html>
<html>
  <head>
    <title>Flexbox Layout</title>
  </head>
  <body>
    <div class="container">
      <div class="item">Item 1</div>
      <div class="item">Item 2</div>
      <div class="item">Item 3</div>
    </div>
  </body>
</html>
  `,
    initialCss: `
/* Add your CSS styles here */
.container {
  /* Add your container styles here */
  }`,
  },
  {
    id: 6,
    title: "CSS Animation Practice",
    complexity: "Complexity: ★★★★☆",
    description:
      "Create a simple animation using CSS. Animate an element to move across the screen.",
    hint: "Use the @keyframes rule to define the animation and the animation property to apply it to an element.",
    initialHtml: `
  <!DOCTYPE html>
  <html>
    <head>
      <title>CSS Animation</title>
    </head>
    <body>

    </body>
  </html>
    `,
    initialCss: `
  /* Add your CSS styles here */
  .animated-box {
   
  }

  @keyframes move {

  }
    `,
  },
  {
    id: 7,
    title: "CSS Variables Practice",
    complexity: "Complexity: ★★★☆☆",
    description:
      "Create a webpage that uses CSS variables to manage colors and font sizes.",
    hint: "Use the :root selector to define your CSS variables and use the var() function to apply them.",
    initialHtml: `
  <!DOCTYPE html>
  <html>
    <head>
      <title>CSS Variables</title>
    </head>
    <body>

    </body>
  </html>
    `,
    initialCss: `
  /* Add your CSS styles here */
  :root {
   
  }

  body {
   
  }
    `,
  }
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
  }, [currentChallengeIndex]);

  const currentChallenge = challenges[currentChallengeIndex];

  return (
    <Layout>
      <title>WebLearn HTML & CSS </title>
      <main>
        <div className="container-fluid g-0">
          <div className="row h-100 g-0">
            <div className="col-2 navbar-bg">
            <h1 className="mx-2 navbar-text">WebLearn</h1>
            <h2 className="mx-2 navbar-text fs-3">Content Navigation</h2>
              <p>
                <a
                  href="/instructLimits"
                  className="btn btn-secondary d-block mx-2 py-1"
                >
                  Instructions & Limitations
                </a>
              </p>
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
                <div className="flex-grow-1 navbar-text overflow-auto">
                  <h3>Challenge #{currentChallenge.id}:</h3>
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
          <a target="_blank" href="https://forms.gle/vAMBqqHPxnH7eX4Q8">
            {" "}
            Fill out a feedback form!{" "}
          </a>
          Just because the code can run doesn't mean it is the right way to do
          something.
        </p>
      </footer>
    </Layout>
  );
}

export default Page;
