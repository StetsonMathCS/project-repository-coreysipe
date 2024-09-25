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
                Practice Modes HTML (Hypertext Markup Language) is the standard
                markup language for creating web pages and web applications. It
                provides the structure and content of a webpage, defining the
                elements and their relationships.
              </p>
              <p>
                To learn HTML, you need to understand the basic syntax and tags
                used to structure the content. HTML tags are enclosed in angle
                brackets like the following: &lt; &gt; and consist of an opening
                tag such as &lt;html&gt; and a closing tag &lt;/html&gt;.
                Elements can have attributes that provide additional information
                or modify their behavior.
              </p>
              <p>
                By learning HTML, you can create the structure and content of
                web pages, including headings, paragraphs, links, images, and
                more. It is the foundation of web development and an essential
                skill for anyone interested in building websites or web
                applications.
              </p>
            </div>
            <div className="col-5 h-100 overflow-auto">
              <p>
                Practice Modes HTML (Hypertext Markup Language) is the standard
                markup language for creating web pages and web applications. It
                provides the structure and content of a webpage, defining the
                elements and their relationships.
              </p>
              <p>
                To learn HTML, you need to understand the basic syntax and tags
                used to structure the content. HTML tags are enclosed in angle
                brackets like the following: &lt; &gt; and consist of an opening
                tag such as &lt;html&gt; and a closing tag &lt;/html&gt;.
                Elements can have attributes that provide additional information
                or modify their behavior.
              </p>
              <p>
                By learning HTML, you can create the structure and content of
                web pages, including headings, paragraphs, links, images, and
                more. It is the foundation of web development and an essential
                skill for anyone interested in building websites or web
                applications.
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
