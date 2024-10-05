"use client";
import React, { useState, useEffect } from "react";
import Layout from "../layout.js";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

const sections = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    content: `
      <p>JavaScript is a programming language that allows you to add interactivity and dynamic behavior to web pages. It is commonly used for client-side web development, where it runs directly in the web browser and can manipulate the HTML and CSS of a webpage. To learn JavaScript, you can start by understanding the basics of the language, such as variables, data types, operators, and control flow. You can then explore more advanced concepts like functions, objects, arrays, and DOM manipulation. One of the best ways to learn JavaScript is by practicing coding exercises and building small projects. This will help you gain hands-on experience and reinforce your understanding of the language. Now onto some basics of JS (JavaScript)</p>
      <p>JS is a versatile language that can be used for a wide range of applications, from simple animations and interactive elements on a webpage to complex web applications and server-side development. It is an essential skill for web developers and can open up many opportunities in the tech industry. By learning JS, you can enhance your web development skills and create dynamic, interactive websites that engage users and provide a better user experience. Below is some basic code examples:</p>
      <p><code>console.log('Hello, World!');</code></p>
      <p><code>let name = 'John';</code></p>
      <p><code>function greet(name) {</code></p>
      <p><code>return 'Hello, ' + name + '!';</code></p>
      <p><code>}</code></p>
      <p>These examples demonstrate how to use JS to output text to the console, declare variables, and define functions. By practicing these basic concepts and building on them, you can develop your skills and become proficient in JS programming.</p>
      <p>Another feature of JS is alerts. Alerts are pop-up boxes that display a message to the user. They can be used to provide information, warnings, or error messages. Here is an example of how to use an alert:</p>
      <p><code>alert('Hello, World!');</code></p>
      <p>Alerts are a useful tool for providing information to users and can be used to enhance the user experience of your website. By using alerts judiciously, you can create a more engaging and interactive website that keeps users informed and engaged.</p>
      <p>Here are some practical ways JS is used for web development:</p>
      <ul>
        <li>Adding interactivity to web pages</li>
        <li>Validating user input in forms</li>
        <li>Making AJAX requests to fetch data from a server</li>
        <li>Creating animations and effects</li>
        <li>Building web applications with frameworks like React, Angular, and Next.js (WebLearn uses React and Next.js!)</li>
      </ul>
       `,
  },
  {
    id: 2,
    title: "Javascript by itself",
    content: `
    <p>Before diving into using JS with HTML and CSS, it is important to know how to use it on its own. Below are some examples of how to use JS in a standalone environment:</p>
    <p><code>let x = 5;</code></p>
    <p><code>let y = 10;</code></p>
    <p><code>let sum = x + y;</code></p>
    <p><code>console.log(sum);</code></p>
    <p>These examples demonstrate how to declare variables, perform arithmetic operations (JS is capable of addition, subtraction, multiplication, and division), and output the result to the console. By practicing these basic concepts, you can develop your skills and become more knowledgeable in JS programming.</p>
    <p>Adding onto this, you can also use JS to create interactive programs that take user input and produce output based on that input. For example, you can create a simple calculator that adds, subtracts, multiplies, or divides two numbers entered by the user. This can be done using functions and conditional statements to perform the desired operation and display the result.</p>
    <p>Heres an example of a simple calculator:</p>
    <p><code>function calculator(operator, num1, num2) {</code></p>
    <p><code>let result;</code></p>
    <p><code>switch (operator) {</code></p>
    <p><code>case '+':</code></p>
    <p><code>result = num1 + num2;</code></p>
    <p><code>break;</code></p>
    <p><code>case '-':</code></p>
    <p><code>result = num1 - num2;</code></p>
    <p><code>break;</code></p>
    <p><code>case '*':</code></p>
    <p><code>result = num1 * num2;</code></p>
    <p><code>break;</code></p>
    <p><code>case '/':</code></p>
    <p><code>result = num1 / num2;</code></p>
    <p><code>break;</code></p>
    <p><code>default:</code></p>
    <p><code>result = 'Invalid operator';</code></p>
    <p><code>}</code></p>
    <p><code>return result;</code></p>
    <p><code>}</code></p>
    <p>Now here is how that code looks when you use it:</p>
    <p><code>let operator = '+';</code></p>
    <p><code>let num1 = 5;</code></p>
    <p><code>let num2 = 10;</code></p>
    <p><code>let result = calculator(operator, num1, num2);</code></p>
    <p><code>console.log(result);</code></p>
    <p>This is just one of several ways you can use JS to create interactive programs. By practicing these concepts and building on them, you can develop your skills and become stronger in JS programming.</p>
    
    `,
  },
  {
    id: 3,
    title: "Dom Manipulation and User Interaction",
    content: `
    <p>One of the key features of JavaScript is its ability to manipulate the Document Object Model (DOM) of a webpage. The DOM is a representation of the structure and content of a webpage, and JS can be used to interact with and modify it. This allows you to create dynamic, interactive web pages that respond to user input and events.</p>
    <p>Here are some examples of how you can use JS to manipulate the DOM:</p>
    <ul>
      <li>Changing the text content of an element</li>
      <li>Adding or removing HTML elements</li>
      <li>Changing the style of an element</li>
      <li>Responding to user events like clicks, keypresses, and mouse movements</li>
    </ul>
    <p>By using JS to manipulate the DOM, you can create interactive elements like buttons, forms, and animations that enhance the user experience of your website. This can help you engage users and make your website more dynamic and engaging.</p>
    <p>Here is an example of how you can use JS to change the text content of an element:</p>
    <p><code>let element = document.getElementById('myElement');</code></p>
    <p><code>element.textContent = 'Hello, World!';</code></p>
    <p>This code selects an element with the ID 'myElement' and changes its text content to 'Hello, World!'.</p>
    <p>User interaction is another important aspect of web development that can be enhanced with JS. By responding to user events like clicks, keypresses, and mouse movements, you can create interactive elements that engage users and provide a better user experience. This can include things like form validation, image sliders, and interactive games.</p>
    <p>Here is an example of how you can use JS to respond to a button click event:</p>
    <p><code>let button = document.getElementById('myButton');</code></p>
    <p><code>button.addEventListener('click', function() {</code></p>
    <p><code>console.log('Button clicked!');</code></p>
    <p><code>});</code></p>
    <p>This code selects a button element with the ID 'myButton' and adds an event listener that logs 'Button clicked!' to the console when the button is clicked.</p>
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
