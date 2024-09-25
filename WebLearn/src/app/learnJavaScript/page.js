"use client";
import React from "react";
import Layout from "../layout.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

function Page() {
  return (
    <Layout>
      <main className="vh-90">
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
            <div className="col-5 h-100 overflow-auto">
              <p>
                JavaScript is a programming language that allows you to add
                interactivity and dynamic behavior to web pages. It is commonly
                used for client-side web development, where it runs directly in
                the web browser and can manipulate the HTML and CSS of a
                webpage.
              </p>
              <p>
                To learn JavaScript, you can start by understanding the basics
                of the language, such as variables, data types, operators, and
                control flow. You can then explore more advanced concepts like
                functions, objects, arrays, and DOM manipulation.
              </p>
              <p>
                JavaScript can be used to create interactive forms, validate
                user input, handle events, make AJAX requests, and much more. It
                is also widely used in frameworks and libraries like React,
                Angular, and Vue.js to build complex web applications.
              </p>
              <p>
                To practice JavaScript, you can use online coding platforms,
                such as CodePen or JSFiddle, or set up a local development
                environment on your computer. There are also numerous tutorials,
                courses, and resources available online to help you learn
                JavaScript effectively.
              </p>
            </div>
            <div className="col-5 h-100 overflow-auto">
              <p>
                JavaScript is a programming language that allows you to add
                interactivity and dynamic behavior to web pages. It is commonly
                used for client-side web development, where it runs directly in
                the web browser and can manipulate the HTML and CSS of a
                webpage.
              </p>
              <p>
                To learn JavaScript, you can start by understanding the basics
                of the language, such as variables, data types, operators, and
                control flow. You can then explore more advanced concepts like
                functions, objects, arrays, and DOM manipulation.
              </p>
              <p>
                JavaScript can be used to create interactive forms, validate
                user input, handle events, make AJAX requests, and much more. It
                is also widely used in frameworks and libraries like React,
                Angular, and Vue.js to build complex web applications.
              </p>
              <p>
                To practice JavaScript, you can use online coding platforms,
                such as CodePen or JSFiddle, or set up a local development
                environment on your computer. There are also numerous tutorials,
                courses, and resources available online to help you learn
                JavaScript effectively.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer vh-10">
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
