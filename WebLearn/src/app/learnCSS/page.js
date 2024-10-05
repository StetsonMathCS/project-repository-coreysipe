"use client";
import React, { useState, useEffect } from "react";
import Layout from "../layout.js";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

const sections = [
  {
    id: 1,
    title: "What is CSS?",
    content: `
    <p>CSS stands for Cascading Style Sheets and is used to style the visual presentation of a web page. It allows you to control the layout, colors, fonts, and other design elements of your website. CSS is essential for creating attractive and user-friendly web pages. To use CSS, you can include it in your HTML document by linking the CSS file using the <code>&lt;link&gt;</code> tag (external CSS) or by embedding CSS code directly in the <code>&lt;style&gt;</code> tag (inline CSS). Using an external CSS file is the standard practice for separating content from design and making your code more maintainable. Here is an example of both:</p>
    <p>External CSS:</p>
    <pre><code>&lt;head&gt;<br>&nbsp;&nbsp;&lt;link rel="stylesheet" href="styles.css"&gt;<br>&lt;/head&gt;</code></pre>
    <p>An important note for linking your style sheet file is the path to the location of your stylesheet is what goes into the attribute. EX: rel="/css/myCSS.css" CSS files use the extension .css</p>
    <p>Inline CSS:</p> 
    <pre><code>&lt;head&gt;<br>&nbsp;&nbsp;&lt;style&gt; h1 { color: red; } &lt;/style&gt;<br>&lt;/head&gt;</code></pre>
    <p>Both methods work but external CSS is normally the preferred method. CSS rules consist of a selector and a declaration block. The selector specifies which elements the styles should apply to, and the declaration block contains the styles to be applied. Here is an example of a CSS rule:</p>
    <pre><code>h1 { color: red; font-size: 24px; }</code></pre>
    <p>This rule selects all <code>&lt;h1&gt;</code> elements and sets their color to red and font size to 24 pixels. You can also use CSS to create responsive designs that adapt to different screen sizes and devices. Media queries are a powerful feature of CSS that allow you to apply different styles based on the device's characteristics, such as screen width, height, and orientation. Here is an example of a media query:</p>
    <pre><code>@media screen and (max-width: 600px) { h1 { font-size: 18px; } }</code></pre>
    <p>This media query selects all <code>&lt;h1&gt;</code> elements when the screen width is less than or equal to 600 pixels and sets their font size to 18 pixels. CSS is a versatile and powerful tool for web design, and learning CSS will help you create visually appealing and responsive websites.</p>
    `,
  },
  {
    id: 2,
    title: "CLasses and IDs",
    content: `
    <p>Classes and IDs are two types of selectors in CSS that allow you to apply styles to specific elements on a web page. Classes are used to group elements with similar styles, while IDs are used to uniquely identify individual elements. To apply a class or ID to an element, you use the <code>class</code> or <code>id</code> attribute in the HTML tag. Here is an example of how to use classes and IDs:</p>
    <p>Classes:</p>
    <pre><code>&lt;div class="container"&gt;&lt;/div&gt;</code></pre>
    <p>IDs:</p>
    <pre><code>&lt;div id="header"&gt;&lt;/div&gt;</code></pre>
    <p>Classes and IDs are defined in the CSS file using the <code>.class</code> and <code>#id</code> selectors, respectively. Here is an example of how to style elements using classes and IDs:</p>
    <p>Class selector:</p>
    <pre><code>.container { width: 100%; }</code></pre>
    <p>ID selector:</p>
    <pre><code>#header { background-color: blue; }</code></pre>
    <p>You can apply multiple classes to an element by separating them with spaces, and you can use the same class on multiple elements. IDs should be unique and only used once per page. Classes and IDs are essential for creating modular and reusable styles in CSS, and they help you keep your code organized and maintainable.</p>
    <p>Classes and IDs are essential for creating modular and reusable styles in CSS, and they help you keep your code organized and maintainable. You typically want to order your CSS file by what is being called from the HTML first. Below is an example of using more than one class on a div element:</p>
    <pre><code>&lt;div class="container header"&gt;&lt;/div&gt;</code></pre>
    <p>And the CSS:</p>
    <pre><code>.container { width: 100%; }<br>.header { background-color: blue; }</code></pre>
    `,
  },
  // Add more sections as needed
];

function Page() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const handlePrevSection = () => {
    setCurrentSectionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : sections.length - 1
    );
  };

  const handleNextSection = () => {
    setCurrentSectionIndex((prevIndex) =>
      prevIndex < sections.length - 1 ? prevIndex + 1 : 0
    );
  };

  const currentSection = sections[currentSectionIndex];

  return (
    <Layout>
      <title>WebLearn CSS Education</title>
      <div className="d-flex flex-column vh-100">
        <main className="flex-grow-1 overflow-hidden">
          <div className="container-fluid h-100 g-0">
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
              </div>
              <div className="col-8 h-100 overflow-auto">
                <div
                  dangerouslySetInnerHTML={{ __html: currentSection.content }}
                />
              </div>
              <div className="col-2">
                <div className="challenges-container mx-2 mt-auto">
                  <div className="challenges-navigation">
                    <button
                      onClick={handlePrevSection}
                      className="btn btn-secondary me-2"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNextSection}
                      className="btn btn-secondary"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                  <h3>Section #{currentSection.id}:</h3>
                  <h4>{currentSection.title}</h4>
                  <p>
                    This introductory section will start you off with the
                    foundations of JavaScript and how to make a basic demo using
                    what you learn from it.
                  </p>
                  <p>
                    <br />
                    Need more information on how to use the syntax? Check out{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer" // not required but good practice for security purposes. Tabnabbing prevention
                      href="https://www.w3schools.com/js/DEFAULT.asp"
                    >
                      W3Schools JavaScript Tutorials
                    </a>
                  </p>
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
