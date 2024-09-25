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
                CSS (Cascading Style Sheets) is a stylesheet language used to
                describe the presentation of a document written in HTML. CSS
                describes how elements should be rendered on screen, on paper,
                in speech, or on other media. It can control the layout of
                multiple web pages all at once, making it easier to manage the
                design and layout of a website.
              </p>
              <p>
                To apply CSS to an HTML document, you use selectors to target
                elements and declarations to define the style rules. Selectors
                can target elements by type, class, ID, or other attributes, and
                declarations specify the properties and values for the selected
                elements. You can apply CSS inline, internally, or externally to
                an HTML document.
              </p>
              <p>
                CSS properties control the visual aspects of an element, such as
                color, size, spacing, and more. You can use CSS to create
                responsive designs, animations, transitions, and other effects
                on a webpage. By separating the content (HTML) from the
                presentation (CSS), you can easily update the design of a
                website without changing the underlying structure.
              </p>
            </div>
            <div className="col-5 h-100 overflow-auto">
              <p>
                CSS (Cascading Style Sheets) is a stylesheet language used to
                describe the presentation of a document written in HTML. CSS
                describes how elements should be rendered on screen, on paper,
                in speech, or on other media. It can control the layout of
                multiple web pages all at once, making it easier to manage the
                design and layout of a website.
              </p>
              <p>
                To apply CSS to an HTML document, you use selectors to target
                elements and declarations to define the style rules. Selectors
                can target elements by type, class, ID, or other attributes, and
                declarations specify the properties and values for the selected
                elements. You can apply CSS inline, internally, or externally to
                an HTML document.
              </p>
              <p>
                CSS properties control the visual aspects of an element, such as
                color, size, spacing, and more. You can use CSS to create
                responsive designs, animations, transitions, and other effects
                on a webpage. By separating the content (HTML) from the
                presentation (CSS), you can easily update the design of a
                website without changing the underlying structure.
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
