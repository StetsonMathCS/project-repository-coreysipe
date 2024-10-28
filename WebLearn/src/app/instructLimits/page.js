"use client";
import React from "react";
import Layout from "../layout.js";
import CodeEditor from "../components/codePlaygroundMd.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

function Page() {
  return (
    <Layout>
      <title>WebLearn Education Content</title>
      <main className="vh-90">
        <div className="container-fluid h-100 g-0">
          <div className="row h-100 g-0">
            <div className="col-2 navbar-bg">
              <h1 className="mx-2 navbar-text">WebLearn</h1>
              <h5 className="mx-2 navbar-text">Content Navigation</h5>
              <p>
                <a href="/#" className="btn btn-secondary d-block mx-2 py-1">
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
            <div className="px-2 display-border-light pt-1 col-10 h-100 overflow-auto">
              <p>
                WebLearn is an educational platform designed to help you learn
                how to use HTML, CSS & JavaScript (JS). It teaches you by
                learning one language at a time. The intended method of usage is
                to go to the educatonal content for the language you are
                learning, read through each section, and then go to the editor
                for that language and try to complete the challenges in each of
                them (HTML, CSS, JS). The educational content is designed to be
                read in order, but you can skip around if you want to. For
                example: You read the HTML educational material, now you go to
                the HTML editor. You read the CSS educational content, you go to
                the HTML & CSS editor. You read the JavaScript educational
                content, you go to the HTML, CSS & JS editor.
              </p>
              <p>
                You can always go back to the educational content to refresh
                your memory or learn something new. One thing that is important
                to note is in the editors if you hover over something a popup
                will appear. This is due to a technology being utilized called
                IntelliSense. Normally it would autocomplete code for you but
                that has been disabled for the editors. The popup is there to
                help you understand what you are typing. Often times it will
                give you a brief description of what the code does. It may even
                give you a reference page to a documentation to understand the
                tag you are hovering over.
              </p>
              <p>
                There are some limitations to WebLearn that you should be aware
                of.
              </p>
              <ul>
                <li>
                  Anything to do using an API key cannot be used due to the
                  circumstances of how WebLearn is being developed. This means
                  that things like a login method, progession saving,
                  achievements, etc. cannot be implemented.
                </li>
                <li>
                  You can only use base HTML, CSS, and JavaScript. This means
                  you cannot use any libraries or frameworks like React,
                  Angular, Vue, Bootstrap, and more. You can only use the base
                  languages.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer vh-10">
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
