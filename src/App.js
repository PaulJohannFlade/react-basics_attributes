import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article>
      <h2 className="article__title">Article with Attributes</h2>
      <label htmlFor="name">Name</label>
      <input id="name"></input>
      <a
        href="https://www.youtube.com/watch?v=qJqjcxLvEwg&t=1512s"
        className="article__link"
      >
        click
      </a>
    </article>
  );
}
