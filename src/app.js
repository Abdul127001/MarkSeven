import React, { useState } from "react";
import "./styles.css";

var btn = {
  HTML: (
    <span>
      <h2>What Is HTML?</h2>
      <p>
        HyperText Markup Language (HTML) is the set of markup symbols or codes
        inserted into a file intended for display on the Internet. The markup
        tells web browsers how to display a web page's words and images.
      </p>
    </span>
  ),
  JavaScript: (
    <span>
      <h2>What Is JavaScript?</h2>
      <p>
        JavaScript is a scripting or programming language that allows you to
        implement complex features on web pages — every time a web page does
        more than just sit there and display static information for you to look
        at — displaying timely content updates, interactive maps, animated 2D/3D
        graphics, scrolling video jukeboxes, etc.
      </p>
    </span>
  ),
  React: (
    <span>
      <h2>What Is React.js?</h2>
      <p>
        React (also known as React. js or ReactJS) is an open-source, front end,
        JavaScript library for building user interfaces or UI components. It is
        maintained by Facebook and a community of individual developers and
        companies. React can be used as a base in the development of single-page
        or mobile applications.
      </p>
    </span>
  ),
  "Node.js": (
    <span>
      <h2>What IS Node.js?</h2>
      <p>
        Node. js is a platform built on Chrome's JavaScript runtime for easily
        building fast and scalable network applications. Node. js uses an
        event-driven, non-blocking I/O model that makes it lightweight and
        efficient, perfect for data-intensive real-time applications that run
        across distributed devices.
      </p>
    </span>
  )
};

var sub = Object.keys(btn);

export default function App() {
  var [SubContents, setSubContents] = useState("Text Appear Here...");

  function subClickHandler(subContent) {
    var meaning = btn[subContent];
    setSubContents(meaning);
  }

  return (
    <div className="App">
      <ul>
        {sub.map((item) => {
          return (
            <button
              onClick={() => subClickHandler(item)}
              className="btn"
              key={item}
            >
              {item}
            </button>
          );
        })}
      </ul>
      <div className="contentContainer">{SubContents}</div>
    </div>
  );
}
