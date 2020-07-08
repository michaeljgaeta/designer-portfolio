import React from "react";
import "./index.css";

export default function Adidas() {
  return (
    <div className="adidas-main-container">
      <section className="adidas-sub-container">
        <div id="text-surfboards">
          <h1>We've been here the whole time.</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum."
          </p>
        </div>

        <div id="surfboards">
          <img src="/photos/adidas/surfboards.png" alt="surfboards" />
        </div>
      </section>

      <section className="adidas-sub-container">
        <img id="four-image-set" src="/photos/adidas/4-image-set.png" alt="four-surfers" />
      </section>

      <section>
        <img src="/photos/adidas/idea.png" alt="idea" />
      </section>
    </div>
  );
}
