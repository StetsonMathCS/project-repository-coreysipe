"use client";
import React, { useState, useEffect } from "react";
import Layout from "../layout.js";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

const sections = [
  {
    id: 1,
    title: "Introduction to JavaScript and Forms",
    content: `
      <p>JavaScript (JS) is a versatile programming language that is used to create interactive and dynamic web pages. It is an essential tool for web developers, as it allows you to add functionality to your websites and create engaging user experiences. One way it is used is to create interactive forms.</p>
      <p>Here is an example of how you can use JS to create an interactive form between HTML and JS:</p>
      <p>Here is the HTML code for the form:</p>
      <p><code>&lt;form id="myForm"&gt;</code></p>
      <p><code>&lt;input type="text" id="name" placeholder="Enter your name"&gt;</code></p>
      <p><code>&lt;button type="submit"&gt;Submit&lt;/button&gt;</code></p>
      <p><code>&lt;/form&gt;</code></p>
      <p>Here is the JS code that goes with the form:</p>
      <p><code>document.getElementById('myForm').addEventListener('submit', function(event) {</code></p>
      <p><code>  event.preventDefault();</code></p>
      <p><code>&nbsp;&nbsp;let name = document.getElementById('name').value;</code></p>
      <p><code>&nbsp;&nbsp;alert('Hello, ' + name + '!');</code></p>
      <p><code>});</code></p>
      <p>If you would like to try this out for yourself you can go to the <a href="../">HTML, CSS & JS Editor</a> and paste the code accordingly in there to see how it works.</p>
      <p>Forms are used primarily for collecting user input, such as login information, contact details, and feedback. By using JS to add interactivity to your forms, you can create a more engaging user experience and provide instant feedback to users.</p>
      <p>By learning how to use JS to create interactive forms, you can enhance your web development skills and create more dynamic and engaging websites. Practice using JS to build your skills and become more proficient in web development.</p>`,
  },
  {
    id: 2,
    title: "Creating Modal Windows and Popups",
    content: `
      <p>Modal windows and popups are common features of modern websites that are used to display additional information, alerts, or interactive elements. They are often used to provide feedback to users, collect input, or display important messages.</p>
      <p>Here is an example of how you can use JS to create a modal window:</p>
      <p>Here is the HTML code for the modal window:</p>
      <p><code>&lt;div id="myModal" class="modal"&gt;</code></p>
      <p><code>&nbsp;&nbsp;&lt;div class="modal-content"&gt;</code></p>
      <p><code>&nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="close" onclick="closeModal()"&gt;&times;&lt;/span&gt;</code></p>
      <p><code>&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;This is a modal window!&lt;/p&gt;</code></p>
      <p><code>&nbsp;&nbsp;&lt;/div&gt;</code></p>
      <p><code>&lt;/div&gt;</code></p>
      <p>Here is the JS code that goes with the modal window:</p>
      <p><code>function openModal() {</code></p>
      <p><code>&nbsp;&nbsp;document.getElementById('myModal').style.display = 'block';</code></p>
      <p><code>}</code></p>
      <p><code>function closeModal() {</code></p>
      <p><code>&nbsp;&nbsp;document.getElementById('myModal').style.display = 'none';</code></p>
      <p><code>}</code></p>
      <p>Modal windows and popups are a great way to add interactivity to your website and engage users. By using JS to create modal windows, you can provide users with additional information, alerts, and interactive elements that enhance the user experience of your website.</p>`,
  },
  {
    id: 3,
    title: "Interactive Navigation Menus",
    content: `
      <p>Interactive navigation menus are an essential part of websites that allow users to navigate between different pages and sections of a website. They are often used to provide users with easy access to important information and content, and to improve the overall user experience of a website.</p>
      <p>Here is an example of how you can use JS to create an interactive navigation menu that has visibility toggling:</p> 
      <p>Here is the HTML code for the navigation menu:</p>
      <p><code>&lt;button id="toggleMenu" onclick="toggleMenu()"&gt;Toggle Menu&lt;/button&gt;</code></p>
      <p><code>&lt;ul id="menu"&gt;</code></p>
      <p><code>&nbsp;&nbsp;&lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;</code></p>
      <p><code>&nbsp;&nbsp;&lt;li&gt;&lt;a href="#"&gt;About&lt;/a&gt;&lt;/li&gt;</code></p>
      <p><code>&nbsp;&nbsp;&lt;li&gt;&lt;a href="#"&gt;Services&lt;/a&gt;&lt;/li&gt;</code></p>
      <p><code>&nbsp;&nbsp;&lt;li&gt;&lt;a href="#"&gt;Contact&lt;/a&gt;&lt;/li&gt;</code></p>
      <p><code>&lt;/ul&gt;</code></p>
      <p>Here is the JS code that goes with the navigation menu:</p>
      <p><code>let menu = document.getElementById('menu');</code></p>
      <p><code>function toggleMenu() {</code></p>
      <p><code>&nbsp;&nbsp;if (menu.style.display === 'block') {</code></p>
      <p><code>&nbsp;&nbsp;&nbsp;&nbsp;menu.style.display = 'none';</code></p>
      <p><code>&nbsp;&nbsp;} else {</code></p>
      <p><code>&nbsp;&nbsp;&nbsp;&nbsp;menu.style.display = 'block';</code></p>
      <p><code>&nbsp;&nbsp;}</code></p>
      <p><code>}</code></p>
      <p>Navigation menus are a key part of present day websites that help users navigate between different pages and sections of a website. By using JS to create a responsive navigation menu, you can provide users with easy access to important information and content, and improve the overall user experience of your website.</p>`,
  },
  {
    id: 4,
    title: "Accordion Menus: Expanding and Collapsing Content",
    content: `
      <p>Accordion menus are a popular feature of websites that allow users to expand and collapse content sections to view additional information. They are often used to display FAQs, product information, and other content that can be organized into sections. Below is how to create an accordion utilizing HTML, CSS, and JavaScript.</p>
      <p>Here is the HTML code for the accordion menu:</p>
      <p><code>
      &lt;div class="accordion"&gt;<br>
      &nbsp;&nbsp;&lt;button class="accordion-button" onclick="toggleAccordion(this)"&gt;Section 1&lt;/button&gt;<br>
      &nbsp;&nbsp;&lt;div class="accordion-content"&gt;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Content for Section 1&lt;/p&gt;<br>
      &nbsp;&nbsp;&lt;/div&gt;<br>
      &nbsp;&nbsp;&lt;button class="accordion-button" onclick="toggleAccordion(this)"&gt;Section 2&lt;/button&gt;<br>
      &nbsp;&nbsp;&lt;div class="accordion-content"&gt;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Content for Section 2&lt;/p&gt;<br>
      &nbsp;&nbsp;&lt;/div&gt;<br>
      &lt;/div&gt;</code>
      </p>
      <p>Here is the CSS code for the accordion menu:</p>
      <p><code>
      .accordion-button {<br>
        &nbsp;&nbsp;background-color: #f0f0f0;<br>
        &nbsp;&nbsp;border: none;<br>
        &nbsp;&nbsp;padding: 10px;<br>
        &nbsp;&nbsp;cursor: pointer;<br>
      }<br>
      
      .accordion-content {<br>
        &nbsp;&nbsp;display: none;<br>
        &nbsp;&nbsp;padding: 10px;<br>
      }
      </code></p>
      <p>Here is the JS code that goes with the accordion menu:</p>
      <p><code>
      function toggleAccordion(button) {<br>
        &nbsp;&nbsp;const content = button.nextElementSibling;<br>
        &nbsp;&nbsp;content.style.display = content.style.display === "block" ? "none" : "block";<br>
      }
      </code></p>
      <p>Accordions are useful for displaying content onto a page where a lot of scrolling would happen due to the amount of information on the page. Users are less likely to read everything if they feel it appears too lengthy. </p>
      `,
  },
  {
    id: 5,
    title: "How to create animations!",
    content: `
    <p>This is the last chapter of the last section. If you've made it this far, thanks for using WebLearn! More will come soon. For now, keep learning and playing around with HTML, CSS, and JavaScript! The world is your oyster.</p>
    <p>Lets have some fun creating an animation! Animations can be eye catching and visually appealing if used correctly. They can also be used to make fun projects for your on personal entertainment! We will utilize HTML, CSS, and JavaScript to do this.</p>
    <p>Here is the HTML code for the animation:</p>
    <p><code>
    &lt;div class="ball"&gt;&lt;/div&gt;
    </code></p>
    <p>Here is the CSS code for the animation:</p>
    <p><code>
    .ball { <br>
      &nbsp;&nbsp;width: 50px;<br>
      &nbsp;&nbsp;height: 50px;<br>
      &nbsp;&nbsp;background-color: red;<br>
      &nbsp;&nbsp;border-radius: 50%;<br>
      &nbsp;&nbsp;position: absolute;<br>
      &nbsp;&nbsp;top: 0;<br>
      &nbsp;&nbsp;left: 0;<br>
    }
    </code></p>
    <p>Here is the JS code that goes with the animation:</p>
    <p><code>
    const ball = document.querySelector('.ball');<br>
    let direction = 1;<br>
    let speed = 2;<br>
    let topPosition = 0;<br>

    function animate() {<br>
      &nbsp;&nbsp;topPosition += speed * direction;<br>
      &nbsp;&nbsp;if (topPosition >= window.innerHeight - 50 || topPosition <= 0) {<br>
        &nbsp;&nbsp;direction *= -1;<br>
        &nbsp;&nbsp;}<br>
        &nbsp;&nbsp;ball.style.top = topPosition + 'px';<br>
        &nbsp;&nbsp;requestAnimationFrame(animate);<br>
    }<br>

    animate();
    </code></p>
    <p>Animations can be used to create engaging and interactive user experiences on your website. By using JS to create animations, you can add visual interest to your website and make it more dynamic and engaging for users. Practice creating animations to enhance your web development skills and create more visually appealing websites.</p>

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
      <title>WebLearn JS Education</title>
      <div className="d-flex flex-column vh-100">
        <main className="flex-grow-1 overflow-hidden">
          <div className="container-fluid h-100 g-0">
            <div className="row h-100 g-0">
              <div className="col-2 navbar-bg">
                <h1 className="mx-2 navbar-text">WebLearn</h1>
                <h5 className="mx-2 navbar-text">Content Navigation</h5>
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
              <div className="px-2 pt-1 display-border-light col-8 h-100 overflow-auto">
                <div
                  dangerouslySetInnerHTML={{ __html: currentSection.content }}
                />
              </div>
              <div className="col-2 pt-1 display-border-light">
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
