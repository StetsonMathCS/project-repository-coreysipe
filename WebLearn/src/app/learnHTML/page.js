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
      <p>To begin learning HTML you must understand the foundation and the structure of how an HTML file looks like. To create a html file you give the file an extension of .html or .htm (both work the same). The difference is non-existent between the two extensions. Earlier operating systems could not take four letter extensions which birthed .htm by cutting out the l.</p>
      <p>How are HTML files structured? Typically your standard HTML file will be formatted in this order.
      <br><br>
      &lt;!DOCTYPE html&gt;<br>
      &lt;html&gt;<br>
      &lt;head&gt;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Text that appears on the tab in browser&lt;/title&gt;<br>
      &lt;/head&gt;<br>
      &lt;body&gt;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;(content goes here)<br>
      &lt;/body&gt;<br>
      &lt;/html&gt;
      </p>
      <p>Declaring the doctype is the first thing you do in an HTML file. This tells the browser what version of HTML you are using (we are using the latest version HTML5 which builds off of previous versions of HTML. HTML5 is the standard version worldwide). The html tag is the root element of the document. The head tag contains meta information about the document. What is meta information? Meta information, also known as meta tags, are snippets of code that provide additional information about a web page to search engines and other clients. Meta tags are located in the head section of the HTML page, and are only visible to search engines and those who view the website's source code. Meta information is important for Search Engine Optimization (SEO) so that the page is ranked higher in search engine results. The body tag contains the majority of the visible content on your page and will be the meat and potatoes of your html file.</p>
      <p>So now you have an html file and you want to see it in action. Before we do that we need to add some content to the body of the file otherwise we will be staring at a blank page. To add content to the body of the file you can add text, images, links, and more. For now we are going to learn how to use paragraph and header tags.</p>
      <p>&lt;h1&gt;This is a header tag&lt;/h1&gt;<br> This is the largest header tag. It is used for main headings. The sizing of the header tags goes from h1 to h6. h1 being the largest and h6 being the smallest. It is important to note that you can only user a header tag once per page and sizing. You can have h1 and h2, but not two h1 tags or two h2 tags.</p>
      <p>Next up we have paragraph tags. To use a paragraph tag you use the following syntax. &lt;p&gt;This is a paragraph tag&lt;/p&gt;. The paragraph tag is used for text. It is the most common tag used in HTML. It is used for text that is not a header tag. It is important to note that you can have multiple paragraph tags on a page. All the text you see on this page is inside of paragraph tags!</p> 
      <p>Closing HTML tags is important because it ensures proper structure and hierarchy in an HTML document. HTML tags define the structure and content of a webpage, and they need to be opened and closed correctly to maintain the intended structure. When a tag is opened, it is best practice to close it as to indicate the end of its content. Some tags don't need to be closed in order to work and render onto the page technically speaking. Failure to close tags can sometimes lead to unexpected rendering and layout issues in the browser. It can also cause the browser to interpret the content incorrectly, resulting in broken or invalid HTML. For example, if you have an opening &lt;p&gt; tag without a corresponding closing &lt;/p&gt; it can affect the formatting and styling of the text within the paragraph but nonetheless would work and not break. By properly closing HTML tags, you ensure that the structure of your webpage is well-defined and that the content is displayed as intended. It helps maintain code readability, makes it easier to debug and maintain the code, and ensures compatibility across different browsers and devices.</p>
      <p>After all of this if you open the file then you will see the results of your work! If you don't want to make a file but still play around and practice HTML use the HTML playground tool on the lefthand navigation menu!</p>
    `,
  },
  {
    id: 2,
    title: "Links and Lists",
    content: `
    <p>Have you ever wondered how to create a bullet list or make a clickable piece of text to take you to a link of your choice on demand? It is actually quite simple!</p>
    <p>In HTML, there are two primary types of lists: ordered lists (&lt;ol&gt;) and unordered lists (&lt;ul&gt;). Each serves a different purpose and is used to display items in a specific format.</p>
    <p>An ordered list is used when the order of the items is important. Each item in the list is numbered automatically by the browser. This is useful for instructions, steps, or any content where the sequence matters. Here is an example of an ordered list:</p>
    <p>
    &lt;ol&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Preheat the oven to 350°F.&lt;/li&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Mix the ingredients.&lt;/li&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Bake for 30 minutes.&lt;/li&gt;<br>
    &lt;/ol&gt;
    </p>
    <p>An unordered list is used when the order of the items does not matter. Each item in the list is marked with a bullet point. This is useful for lists where the sequence is not important, such as a list of features or a grocery list. Here is an example of an unordered list:</p>
    <p>
    &lt;ul&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Apples&lt;/li&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Bananas&lt;/li&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Cherries&lt;/li&gt;<br>
    &lt;/ul&gt;
    </p>
    <p>Moving onto links, links are an essential part of the web. They allow users to navigate between pages, view related content, and access external resources. In HTML, links are created using the &lt;a&gt; tag, which stands for anchor. The &lt;a&gt; tag is used to create hyperlinks, or clickable text or images that direct users to another webpage or resource. <a href="https://www.youtube.com/watch?v=J---aiyznGQ" rel="noreferrer" target="_blank"> Here is an example of a link will take you to another page.</a> There are a few different attributes you give to making links. To make the hyperlink itself you need to give the attribute href="your_link_here" and if you want it to open a new tab an additional attribute of target="_blank". A blank target will stop the redirect from happening in the same tab which is useful for if you want users to not leave your website on accident and rather they close the new tab once they are finished with it. Another attribute that can be useful for security purposes is adding the relation attribute with "noreferrer" so like so: rel="noreferrer". Noreferrer stops linked website owners from seeing the origin of traffic you send to their website and plays a crucial role in protecting your site from reverse tabnabbing. Tabnabbing is a type of phishing attack that exploits the behavior of web browsers to trick users into revealing sensitive information. To learn more about tabnabbing view <a href="https://owasp.org/www-community/attacks/Reverse_Tabnabbing" rel=""noreferrer"" target="_blank">OWASP's definition of tabnabbing</a>. For the practice challenges on WebLearn it is not nescessary to make your links secure but is a good habit to develop if you want to start the habit now. Now that we have looked at the attributes we can look at an example:</p>
    <p>
    &lt;a href="google.com" rel="noreferrer" target="_blank"&gt;This is a search engine&lt;/a&gt;<br><br>
    You can also put headers and paragraph tags inside of the anchor tag to make the text clickable. This is useful for making a whole section of text clickable rather than just a single word. The same can be done with images.
    </p>
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
