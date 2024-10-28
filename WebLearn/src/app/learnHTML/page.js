"use client";
import React, { useState, useEffect } from "react";
import Layout from "../layout.js";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

const sections = [
  {
    // Paragraph tags are on single lines to create less lines and a smaller file size. Loads the page a little faster. This matters on larger scale websites like stetson.edu

    id: 1,
    title: "HTML Structure and Content",
    content: `
      <p>What is HTML? HTML stands for Hyper Text Markup Language. Technically speaking, it is not a programming language. Regardless of this it is highly used today. Any webpage you see is using HTML. Even this one!</p>
      <p>To begin learning HTML you must understand the foundation and the structure of how an HTML file looks like. To create a html file you give the file an extension of <code>.html</code> or <code>.htm</code> (both work the same). The difference is non-existent between the two extensions. Earlier operating systems could not take four letter extensions which birthed .htm by cutting out the l.</p>
      <p>How are HTML files structured? Typically your standard HTML file will be formatted in this order.
      <br><br>
      <code>&lt;!DOCTYPE html&gt;<br>
      &lt;html&gt;<br>
      &lt;head&gt;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;</code>Text that appears on the tab in browser<code>&lt;/title&gt;<br>
      &lt;/head&gt;<br>
      &lt;body&gt;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;</code>(content goes here)<code><br>
      &lt;/body&gt;<br>
      &lt;/html&gt;</code>
      </p>
      <p>Declaring the doctype is the first thing you do in an HTML file. This tells the browser what version of HTML you are using (we are using the latest version HTML5 which builds off of previous versions of HTML. HTML5 is the standard version worldwide). The html tag is the root element of the document. The head tag contains meta information about the document. What is meta information? Meta information, also known as meta tags, are snippets of code that provide additional information about a web page to search engines and other clients. Meta tags are located in the head section of the HTML page, and are only visible to search engines and those who view the website's source code. Meta information is important for Search Engine Optimization (SEO) so that the page is ranked higher in search engine results. The body tag contains the majority of the visible content on your page and will be the meat and potatoes of your html file.</p>
      <p>So now you have an html file and you want to see it in action. Before we do that we need to add some content to the body of the file otherwise we will be staring at a blank page. To add content to the body of the file you can add text, images, links, and more. For now we are going to learn how to use paragraph and header tags.</p>
      <p><code>&lt;h1&gt;</code>This is a header tag<code>&lt;/h1&gt;<br></code> This is the largest header tag. It is used for main headings. The sizing of the header tags goes from h1 to h6. h1 being the largest and h6 being the smallest. It is important to note that you can only user a header tag once per page and sizing. You can have h1 and h2, but not two h1 tags or two h2 tags.</p>
      <p>Next up we have paragraph tags. To use a paragraph tag you use the following syntax. <code>&lt;p&gt;</code>This is a paragraph tag<code>&lt;/p&gt;</code>. The paragraph tag is used for text. It is the most common tag used in HTML. It is used for text that is not a header tag. It is important to note that you can have multiple paragraph tags on a page. All the text you see on this page is inside of paragraph tags!</p> 
      <p>Closing HTML tags is important because it ensures proper structure and hierarchy in an HTML document. HTML tags define the structure and content of a webpage, and they need to be opened and closed correctly to maintain the intended structure. When a tag is opened, it is best practice to close it as to indicate the end of its content. Some tags don't need to be closed in order to work and render onto the page technically speaking. Failure to close tags can sometimes lead to unexpected rendering and layout issues in the browser. It can also cause the browser to interpret the content incorrectly, resulting in broken or invalid HTML. For example, if you have an opening <code>&lt;p&gt;</code> tag without a corresponding closing <code>&lt;/p&gt;</code> it can affect the formatting and styling of the text within the paragraph but nonetheless would work and not break. By properly closing HTML tags, you ensure that the structure of your webpage is well-defined and that the content is displayed as intended. It helps maintain code readability, makes it easier to debug and maintain the code, and ensures compatibility across different browsers and devices.</p>
      <p>After all of this if you open the file then you will see the results of your work! If you don't want to make a file but still play around and practice HTML use the HTML playground tool on the lefthand navigation menu!</p>
    `,
  },
  {
    id: 2,
    title: "Links and Lists",
    content: `
    <p>Have you ever wondered how to create a bullet list or make a clickable piece of text to take you to a link of your choice on demand? It is actually quite simple!</p>
    <p>In HTML, there are two primary types of lists: ordered lists (<code>&lt;ol&gt;</code>) and unordered lists (<code>&lt;ul&gt;</code>). Each serves a different purpose and is used to display items in a specific format.</p>
    <p>An ordered list is used when the order of the items is important. Each item in the list is numbered automatically by the browser. This is useful for instructions, steps, or any content where the sequence matters. Here is an example of an ordered list:</p>
    <p>
    <code>&lt;ol&gt;</code><br>
    &nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;li&gt;</code>Preheat the oven to 350°F.<code>&lt;/li&gt;</code><br>
    &nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;li&gt;</code>Mix the ingredients.<code>&lt;/li&gt;</code><br>
    &nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;li&gt;</code>Bake for 30 minutes.<code>&lt;/li&gt;</code><br>
    <code>&lt;/ol&gt;</code>
    </p>
    <p>An unordered list is used when the order of the items does not matter. Each item in the list is marked with a bullet point. This is useful for lists where the sequence is not important, such as a list of features or a grocery list. Here is an example of an unordered list:</p>
    <p>
    <code>&lt;ul&gt;</code><br>
    &nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;li&gt;</code>Apples<code>&lt;/li&gt;</code><br>
    &nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;li&gt;</code>Bananas<code>&lt;/li&gt;</code><br>
    &nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;li&gt;</code>Cherries<code>&lt;/li&gt;</code><br>
    <code>&lt;/ul&gt;</code>
    </p>
    <p>Moving onto links, links are an essential part of the web. They allow users to navigate between pages, view related content, and access external resources. In HTML, links are created using the <code>&lt;a&gt;</code> tag, which stands for anchor. The <code>&lt;a&gt;</code> tag is used to create hyperlinks, or clickable text or images that direct users to another webpage or resource. <a href="https://www.youtube.com/watch?v=J---aiyznGQ" rel="noreferrer" target="_blank"> Here is an example of a link will take you to another page.</a> There are a few different attributes you give to making links. To make the hyperlink itself you need to give the attribute <code>href="your_link_here"</code> and if you want it to open a new tab an additional attribute of <code>target="_blank"</code>. A blank target will stop the redirect from happening in the same tab which is useful for if you want users to not leave your website on accident and rather they close the new tab once they are finished with it. Another attribute that can be useful for security purposes is adding the relation attribute with "noreferrer" so like so: <code>rel="noreferrer"</code>. Noreferrer stops linked website owners from seeing the origin of traffic you send to their website and plays a crucial role in protecting your site from reverse tabnabbing. Tabnabbing is a type of phishing attack that exploits the behavior of web browsers to trick users into revealing sensitive information. To learn more about tabnabbing view <a href="https://owasp.org/www-community/attacks/Reverse_Tabnabbing" rel="noreferrer" target="_blank">OWASP's definition of tabnabbing</a>. For the practice challenges on WebLearn it is not nescessary to make your links secure but is a good habit to develop if you want to start the habit now. Now that we have looked at the attributes we can look at an example:</p>
    <p>
    <code>&lt;a href="google.com" rel="noreferrer" target="_blank"&gt;</code>This is a search engine<code>&lt;/a&gt;</code><br><br>
    You can also put headers and paragraph tags inside of the anchor tag to make the text clickable. This is useful for making a whole section of text clickable rather than just a single word. The same can be done with images.
    </p>
    `,
  },
  {
    id: 3,
    title: "Images and Iframes",
    content: `
    <p>Utilizing Images and Iframes in HTML is a great way to add visual content to your webpage. Images can be used to enhance the appearance of your site, provide additional information, or create a more engaging user experience. Iframes, on the other hand, allow you to embed external content, such as videos, maps, or other webpages, directly into your site. Let's take a closer look at how to use images and iframes in HTML.</p>
    <p>To use an image tag in HTML you use the following syntax: <code>&lt;img&gt;</code>. You must added an attribute called src (source). The src attribute specifies the URL of the image file (if using a local image set the src as a path to the location of the file), you can also add an attribute called alt. The alt attribute provides a text description of the image. The alt attribute is important for accessibility and SEO purposes, as it helps screen readers and search engines understand the content of the image. If you are developing a website that must adhere to federal laws then having alt attributes is legally required by ADA compliances. Here is an example of an image tag:</p>
    <p>URL src example: <code>&lt;img src="https://www.example.com/image.jpg" alt="Example Image"&gt;</code> <br> Local src example: <code>&lt;img src="/images/my_image.jpg" alt="My Image"&gt;</code> </p>
    <p>Moving onwards we have iframes. Iframes in HTML are used to embed external content, such as videos, maps, or other webpages, directly into your site. The iframe tag is used to create an inline frame, or a window that contains another webpage or document. This allows you to display content from another source within your own webpage. Here is an example of an iframe tag:</p>
    <p><code>&lt;iframe src="https://www.example.com" width="600" height="400"&gt;&lt;/iframe&gt;</code></p>
    <p>An important note to make for iframes is the security vulnerabilities that come with them. Iframes can be used to embed malicious content, such as phishing forms, malware, or other harmful scripts, into your site. To mitigate these risks, it is important to use iframes responsibly and ensure that the content you are embedding is safe and trustworthy. Additionally, you can use the sandbox attribute to restrict the capabilities of the iframe and prevent it from executing scripts or accessing sensitive information. The sandbox attribute is used to create a secure sandbox environment for the iframe, which limits its capabilities and prevents it from executing scripts, accessing cookies, or performing other potentially harmful actions. Here is an example of an iframe with the sandbox attribute:</p>
    <p><code>&lt;iframe src="https://www.youtube.com/embed/VhJFyyukAzA" width="600" height="400" sandbox&gt;&lt;/iframe&gt;</code></p>
    <p>Now that you have learned how to use images and iframes in HTML, you can start adding visual content to your webpage and embedding external resources. Images and iframes are powerful tools that can enhance the appearance and functionality of your site, so feel free to experiment with different types of content and see what works best for your needs!</p> 
    `,
  },
  {
    id: 4,
    title: "Tables and Forms",
    content: `
    <p>Tables and forms are essential elements of web design that allow you to organize and collect information on your site. Tables are used to display data in a structured format, while forms are used to collect user input and submit data to a server. Let's take a closer look at how to use tables and forms in HTML.</p>
    <p>Tables in HTML are created using the &lt;table&gt; tag, which defines a table element. Tables consist of rows and columns, which are defined using the &lt;tr&gt; (table row), &lt;th&gt; (table header), and &lt;td&gt; (table data) tags. The &lt;th&gt; tag is used to define header cells in a table, while the &lt;td&gt; tag is used to define data cells. Here is an example of a simple table:</p>
    <p>
    &lt;table&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;Header 1&lt;/th&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;Header 2&lt;/th&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;Header 3&lt;/th&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Data 1&lt;/td&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Data 2&lt;/td&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Data 3&lt;/td&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Data 4&lt;/td&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Data 5&lt;/td&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Data 6&lt;/td&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;<br>
    &lt;/table&gt;<br>
    </p>
    <p>
    Here is what this table would look like when rendered in a browser:
    <table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
    </tr>
    <tr>
        <td>Data 4</td>
        <td>Data 5</td>
        <td>Data 6</td>
    </tr>
</table>
    </p>
    <p>
    Forms in HTML are created using the &lt;form&gt; tag, which defines a form element. Forms consist of input fields, such as text boxes, radio buttons, checkboxes, and submit buttons, which are defined using the &lt;input&gt; tag. The &lt;input&gt; tag is used to create various types of input fields, such as text, password, email, number, date, and more. Here is an example of a simple form:</p>
    </p>
    <p>
    &lt;form&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;label for="name"&gt;Name:&lt;/label&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="text" id="name" name="name"&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;label for="email"&gt;Email:&lt;/label&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="email" id="email" name="email"&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;label for="message"&gt;Message:&lt;/label&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;textarea id="message" name="message"&gt;&lt;/textarea&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="submit" value="Submit"&gt;<br>
    &lt;/form&gt;
    </p>
    <p>
    Here is what this form would look like when rendered in a browser:
    <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    <label for="message">Message:</label>
    <textarea id="message" name="message"></textarea>
    <input type="submit" value="Submit">
    </form>
    </p>
    `,
  },
  {
    id: 5,
    title: "Div tags and their uses",
    content: `
    <p> As a note before starting to read this section, this is the last of the HTML educational content. If you would like to see more educational content on HTML please use the feedback form. The next section to start is the CSS educational content as it will talk about learning CSS then mixing CSS into HTML coherently </p>
    <p> Div tags are used to create divisions or sections in an HTML document. They are used to group together related elements and apply styling or formatting to them. Div tags are block-level elements, which means they create a new line before and after the element. This allows you to create distinct sections or containers on your webpage and style them independently. Let's take a closer look at how to use div tags in HTML.</p>
    <p> To create a div tag in HTML, you use the following syntax: <code>&lt;div&gt;</code>. The div tag is used to define a division or section in an HTML document. It is a generic container that can hold other elements, such as text, images, links, forms, and more. Div tags are commonly used to group together related content, create layout structures, and apply styling or formatting to specific sections of a webpage. Here is an example of a div tag:</p>
    <p> <code>&lt;div&gt;</code> This is a div tag. <code>&lt;/div&gt;</code></p>
    <p> Div tags can be styled using CSS to change their appearance, size, position, and other properties. You can apply CSS styles to div tags using inline styles, internal styles, or external stylesheets. This allows you to customize the look and feel of your webpage and create unique designs that match your brand or aesthetic. Here is an example of styling a div tag using CSS:</p>
    <p> <code>&lt;div style="background-color: lightblue; color: white; padding: 10px;"&gt;</code> This is a styled div tag. <code>&lt;/div&gt;</code></p>
    <p> Generally it is best practice to use div tags to create layout structures and group related content together. Div tags provide a flexible and versatile way to organize your webpage and apply styling or formatting to specific sections. By using div tags effectively, you can create visually appealing and well-structured webpages that are easy to navigate and understand. In addition to this, styling elements are best used with pulling from a separate CSS file and using the class or id on that div like below. </p>
    <p> <code>&lt;div class="styled-div"&gt;</code> This is a class styled div tag. <code>&lt;/div&gt;</code></p>
    <p> <code>&lt;div id="styled-div"&gt;</code> This is an id styled div tag. <code>&lt;/div&gt;</code></p>
    <p> The class and id attributes are used to apply CSS styles to specific elements on a webpage. The class attribute is used to apply a style to multiple elements, while the id attribute is used to apply a style to a single element. By using classes and ids, you can target specific elements and apply custom styles to them, such as colors, fonts, margins, padding, and more. This allows you to create consistent and cohesive designs across your webpage and maintain a clean and organized code structure. </p>
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
      <title>WebLearn HTML Education</title>
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
              <div className="px-2 display-border-light pt-1 col-8 h-100 overflow-auto">
                <div
                  dangerouslySetInnerHTML={{ __html: currentSection.content }}
                />
              </div>
              <div className="col-2 display-border-light">
                <div className="challenges-container mx-2 mt-auto">
                  <div className="mt-2 challenges-navigation">
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
                    Use the navigational arrows above to traverse between
                    content sections. Each section will provide you with
                    information on how to use different parts of HTML and each
                    section has one practice challenge relavent to it in the
                    HTML playground via the lefthand navigational menu.
                  </p>
                  <p>
                    <br />
                    Need more information on how to use the syntax? Check out{" "}
                    <a
                      target="_blank"
                      rel="noreferrer" // not required but good practice for security purposes. Tabnabbing prevention
                      href="https://www.w3schools.com/html/"
                    >
                      W3Schools HTML Tutorials
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
