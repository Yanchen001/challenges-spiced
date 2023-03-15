import React from "react";
import "./styles.css";

export default function App() {
  return (
    <article>
      <h2 className="article__title">Im a title</h2>
      <label>please input</label>
      <input id="123"></input>
      <a className="article__link" href="www.google.com">
        link
      </a>
    </article>
  );
}
