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
    <p><code>&lt;head&gt;<br>&nbsp;&nbsp;&lt;link rel="stylesheet" href="styles.css"&gt;<br>&lt;/head&gt;</code></p>
    <p>An important note for linking your style sheet file is the path to the location of your stylesheet is what goes into the attribute. EX: rel="/css/myCSS.css" CSS files use the extension .css</p>
    <p>Inline CSS:</p> 
    <p><code>&lt;head&gt;<br>&nbsp;&nbsp;&lt;style&gt; h1 { color: red; } &lt;/style&gt;<br>&lt;/head&gt;</code></p>
    <p>Both methods work but external CSS is normally the preferred method. For the purpose of the challenges utilizing CSS you will use both styles of CSS. CSS rules consist of a selector and a declaration block. The selector specifies which elements the styles should apply to, and the declaration block contains the styles to be applied. Here is an example of a CSS rule:</p>
    <p><code>h1 { color: red; font-size: 24px; }</code></p>
    <p>This rule selects all <code>&lt;h1&gt;</code> elements and sets their color to red and font size to 24 pixels. You can also use CSS to create responsive designs that adapt to different screen sizes and devices. Media queries are a powerful feature of CSS that allow you to apply different styles based on the device's characteristics, such as screen width, height, and orientation. Here is an example of a media query:</p>
    <p><code>@media screen and (max-width: 600px) { h1 { font-size: 18px; } }</code></p>
    <p>This media query selects all <code>&lt;h1&gt;</code> elements when the screen width is less than or equal to 600 pixels and sets their font size to 18 pixels. CSS is a versatile and powerful tool for web design, and learning CSS will help you create visually appealing and responsive websites.</p>
    `,
  },
  {
    id: 2,
    title: "Classes and IDs",
    content: `
    <p>Classes and IDs are two types of selectors in CSS that allow you to apply styles to specific elements on a web page. Classes are used to group elements with similar styles, while IDs are used to uniquely identify individual elements. To apply a class or ID to an element, you use the <code>class</code> or <code>id</code> attribute in the HTML tag. Here is an example of how to use classes and IDs:</p>
    <p>Classes:</p>
    <p><code>&lt;div class="container"&gt;&lt;/div&gt;</code></p>
    <p>IDs:</p>
    <p><code>&lt;div id="header"&gt;&lt;/div&gt;</code></p>
    <p>Classes and IDs are defined in the CSS file using the <code>.class</code> and <code>#id</code> selectors, respectively. Here is an example of how to style elements using classes and IDs:</p>
    <p>Class selector:</p>
    <p><code>.container { width: 100%; }</code></p>
    <p>ID selector:</p>
    <p><code>#header { background-color: blue; }</code></p>
    <p>You can apply multiple classes to an element by separating them with spaces, and you can use the same class on multiple elements. IDs should be unique and only used once per page. Classes and IDs are essential for creating modular and reusable styles in CSS, and they help you keep your code organized and maintainable.</p>
    <p>Classes and IDs are essential for creating modular and reusable styles in CSS, and they help you keep your code organized and maintainable. You typically want to order your CSS file by what is being called from the HTML first. Below is an example of using more than one class on a div element:</p>
    <p><code>&lt;div class="container header"&gt;&lt;/div&gt;</code></p>
    <p>And the CSS:</p>
    <p><code>.container { width: 100%; }<br>.header { background-color: blue; }</code></p>
    <p>It is worth noting that classes and IDs can be named whatever you want them to be. It is best practice to name them something that makes sense to you and is easy to remember. This will help you when you are trying to find a specific class or ID in your CSS file. </p>
    `,
  },
  {
    id: 3,
    title: "Most commonly used CSS properties",
    content: `
    <p>CSS has a wide range of properties that allow you to style the visual presentation of a web page. Some of the most commonly used CSS properties include:</p>
    <p><code>color</code>: Sets the text color of an element.</p>
    <p><code>background-color</code>: Sets the background color of an element.</p>
    <p><code>font-size</code>: Sets the font size of text.</p>
    <p><code>font-family</code>: Sets the font family of text.</p>
    <p><code>text-align</code>: Aligns text within an element.</p>
    <p><code>margin</code>: Sets the margin around an element.</p>
    <p><code>padding</code>: Sets the padding inside an element.</p>
    <p><code>border</code>: Sets the border around an element.</p>
    <p><code>display</code>: Specifies how an element is displayed.</p>
    <p><code>position</code>: Specifies the positioning method of an element.</p>
    <p><code>float</code>: Specifies whether an element should float to the left or right.</p>
    <p><code>width</code>: Sets the width of an element.</p>
    <p><code>height</code>: Sets the height of an element.</p>
    <p><code>background-image</code>: Sets the background image of an element.</p>
    <p><code>list-style-type</code>: Sets the list item marker style.</p>
    <p><code>text-decoration</code>: Sets the text decoration of an element.</p>
    <p><code>border-radius</code>: Sets the border radius of an element.</p>
    <p><code>box-shadow</code>: Sets the box shadow of an element.</p>
    <p>These are just a few of the many CSS properties available for styling web pages. By learning and mastering these properties, you can create visually appealing and responsive designs that enhance the user experience.</p>
    `,
  },
  {
    id: 4,
    title: "Dropdowns and Buttons",
    content: `
    <p>Dropdowns and buttons are common user interface elements used in web design to create interactive and engaging experiences. Dropdowns allow users to select options from a list, while buttons enable users to perform actions such as submitting a form or navigating to another page. In CSS, you can style dropdowns and buttons to match the design of your website and make them more visually appealing. Here is an example of how to style a dropdown and button:</p>
    <p>Dropdown:</p>
    <p><code>&lt;select&gt;<br>&nbsp;&nbsp;&lt;option value="option1"&gt;Option 1&lt;/option&gt;<br>&nbsp;&nbsp;&lt;option value="option2"&gt;Option 2&lt;/option&gt;<br>&lt;/select&gt;</code></p>
    <p>Button:</p>
    <p><code>&lt;button&gt;Click Me&lt;/button&gt;</code></p>
    <p>Here is what the dropdown and button look like by default:</p>
    <p><select><option value="option1">Option 1</option><option value="option2">Option 2</option></select></p>
    <p><button>Click Me</button></p>
    <p>You can style dropdowns and buttons using CSS properties such as <code>background-color</code>, <code>color</code>, <code>font-size</code>, <code>padding</code>, and <code>border</code>. Here is an example of how to style a dropdown and button:</p>
    <p>Dropdown styling:</p>
    <p><code>select {<br>&nbsp;&nbsp;background-color: #f1f1f1;<br>&nbsp;&nbsp;color: #333;<br>&nbsp;&nbsp;padding: 10px;<br>&nbsp;&nbsp;border: 1px solid #ccc;<br>}</code></p>
    <p>Button styling:</p>
    <p><code>button {<br>&nbsp;&nbsp;background-color: #007bff;<br>&nbsp;&nbsp;color: #fff;<br>&nbsp;&nbsp;padding: 10px 20px;<br>&nbsp;&nbsp;border: none;<br>}</code></p>
    <p>Here is what the dropdown and button look like after applying the styles:</p>
    <p><select style="background-color: #f1f1f1; color: #333; padding: 10px; border: 1px solid #ccc;"><option value="option1">Option 1</option><option value="option2">Option 2</option></select></p>
    <p><button style="background-color: #007bff; color: #fff; padding: 10px 20px; border: none;">Click Me</button></p>
    <p>By customizing the appearance of dropdowns and buttons, you can create a cohesive and visually appealing design that enhances the user experience. You can also add hover effects, transitions, and animations to make these elements more interactive and engaging. CSS provides a wide range of styling options that allow you to create unique and creative designs for your website.</p>
    `,
  },
  {
    id: 5,
    title: "Flexbox and Grid",
    content: `
    <p>This is the last chapter in this section, and moving onwards you will want to start learning JavaScript! Our JavaScript sections teach you JavaScript by itself and then combined with HTML & CSS.</p>
    <p>Flexbox and Grid are two powerful layout systems in CSS that allow you to create complex and responsive designs with ease. Flexbox is designed for one-dimensional layouts, such as rows or columns, while Grid is designed for two-dimensional layouts, such as rows and columns. Both layout systems provide a flexible and efficient way to structure and align elements on a web page. Here is an example of how to use Flexbox and Grid:</p>
    <p>Flexbox:</p>
    <p><code>.container {<br>&nbsp;&nbsp;display: flex;<br>&nbsp;&nbsp;justify-content: center;<br>&nbsp;&nbsp;align-items: center;<br>}</code></p>
    <p>Grid:</p>
    <p><code>.container {<br>&nbsp;&nbsp;display: grid;<br>&nbsp;&nbsp;grid-template-columns: 1fr 1fr 1fr;<br>&nbsp;&nbsp;grid-gap: 10px;<br>}</code></p>
    <p>Flexbox and Grid provide a wide range of properties that allow you to control the layout, alignment, and spacing of elements. Some of the most commonly used properties include <code>display</code>, <code>justify-content</code>, <code>align-items</code>, <code>grid-template-columns</code>, and <code>grid-gap</code>. By mastering Flexbox and Grid, you can create visually appealing and responsive designs that adapt to different screen sizes and devices. Here is an example of a layout created using Flexbox:</p>
    <p><code>&lt;div class="container"&gt;<br>&nbsp;&nbsp;&lt;div class="item"&gt;Item 1&lt;/div&gt;<br>&nbsp;&nbsp;&lt;div class="item"&gt;Item 2&lt;/div&gt;<br>&nbsp;&nbsp;&lt;div class="item"&gt;Item 3&lt;/div&gt;<br>&lt;/div&gt;</code></p>
    <p><code>.container {<br>&nbsp;&nbsp;display: flex;<br>&nbsp;&nbsp;justify-content: center;<br>&nbsp;&nbsp;align-items: center;<br>}</code></p>
    <p><code>.item {<br>&nbsp;&nbsp;padding: 10px;<br>&nbsp;&nbsp;margin: 10px;<br>&nbsp;&nbsp;border: 1px solid #39FF14;<br>}</code></p>
    <p>The code above looks like this:</p>
    <p><div class="container" style="display: flex; justify-content: center; align-items: center;"><div class="item" style="padding: 10px; margin: 10px; border: 1px solid #39FF14;">Item 1</div><div class="item" style="padding: 10px; margin: 10px; border: 1px solid #39FF14;">Item 2</div><div class="item" style="padding: 10px; margin: 10px; border: 1px solid #39FF14;">Item 3</div></div></p>
    <p>By using Flexbox and Grid, you can create complex and responsive layouts that adapt to different screen sizes and devices. These layout systems provide a flexible and efficient way to structure and align elements on a web page, and they are essential for creating visually appealing and user-friendly designs. By mastering Flexbox and Grid, you can take your web design skills to the next level and create professional and modern websites.</p>

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
              <div className="px-2 pt-1 col-8 h-100 overflow-auto">
                <div
                  dangerouslySetInnerHTML={{ __html: currentSection.content }}
                />
              </div>
              <div className="col-2 navbar-bg navbar-text">
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
                    This educational section will teach you about the basics of
                    CSS and how to use it to style your web pages. You will
                    learn about CSS syntax, classes, IDs, and more. After
                    completing this section, you will have a solid foundation in
                    CSS and be able to create visually appealing and responsive
                    websites.
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
