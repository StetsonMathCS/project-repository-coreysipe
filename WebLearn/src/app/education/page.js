"use client";
import React from "react";
import Layout from "../layout.js";
import CodeEditor from "../components/codePlaygroundMd.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

function Page() {
  return (
    <Layout>
      <div className="d-flex flex-column vh-100">
        <main className="flex-grow-1 overflow-auto">
          <div className="container-fluid h-100">
            <div className="row h-100">
              <div className="col-2 h-100 overflow-auto">
                <h4 className="ms-1 me-1">Language Select</h4>
                <p>
                  <a
                    href="../htmlEditor"
                    className="btn ms-1 me-1 btn-primary py-1"
                  >
                    HTML
                  </a>
                </p>
                <p>
                  <a
                    href="../htmlCssEditor"
                    className="btn ms-1 me-1 btn-primary py-1"
                  >
                    HTML & CSS
                  </a>
                </p>
                <p>
                  <a href="../" className="btn ms-1 me-1 btn-primary py-1">
                    HTML, CSS & JavaScript
                  </a>
                </p>
                <p>
                  <a href="#" className="btn ms-1 me-1 btn-primary py-1">
                    Educational Content
                  </a>
                </p>
              </div>
              <div className="col-4 h-100 overflow-auto">
                <p>
                  HTML (Hypertext Markup Language) is the standard markup
                  language for creating web pages. It provides the structure and
                  content of a webpage, defining the elements and their
                  relationships. HTML uses tags to mark up elements such as
                  headings, paragraphs, images, links, and more.
                </p>
                <p>
                  To create an HTML document, you start with the &lt;!DOCTYPE
                  html&gt; declaration, followed by the &lt;html&gt; element.
                  Inside the &lt;html&gt; element, you have the &lt;head&gt; and
                  &lt;body&gt; sections. The &lt;head&gt; section contains
                  meta-information about the document, such as the title and
                  character encoding. The &lt;body&gt; section contains the
                  visible content of the webpage.
                </p>
                <p>
                  HTML tags are used to define different elements. For example,
                  the &lt;h1&gt; tag is used for the main heading, while the
                  &lt;p&gt; tag is used for paragraphs. You can also use tags
                  like &lt;img&gt; for images, &lt;a&gt; for links, and
                  &lt;div&gt; for divisions or sections.
                </p>
                <button className="btn btn-primary py-1">Learn HTML</button>
              </div>
              <div className="col-3 h-100 overflow-auto">
                <p>
                  CSS (Cascading Style Sheets) is a stylesheet language used for
                  describing the look and formatting of a document written in
                  HTML. CSS separates the presentation of a document from its
                  structure, allowing you to style elements and create visually
                  appealing web pages.
                </p>
                <p>
                  With CSS, you can define styles for various HTML elements,
                  such as fonts, colors, margins, padding, and more. CSS uses
                  selectors to target specific elements and apply styles to
                  them. You can also use CSS to create layouts, animations, and
                  responsive designs.
                </p>
                <button className="btn btn-primary py-1">Learn CSS</button>
              </div>
              <div className="col-3 h-100 overflow-auto">
                <p>
                  JavaScript is a programming language that allows you to add
                  interactivity and dynamic behavior to your web pages. With
                  JavaScript, you can manipulate HTML elements, handle events,
                  perform calculations, make API requests, and much more.
                </p>
                <p>
                  JavaScript is widely used for client-side scripting, but it
                  can also be used on the server-side with Node.js. It has a
                  large ecosystem of libraries and frameworks that make web
                  development easier and more efficient.
                </p>
                <button className="btn btn-primary py-1">
                  Learn JavaScript
                </button>
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