import React from "react";
import "./index.css";

export default function Adidas() {
  return (
    <div className="adidas-main-container">
      <section className="adidas-sub-container">
        <div>
          <h1 style={{ fontSize: "52px" }}>We've been here the whole time.</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum."
          </p>
        </div>

        <div style={{ width: "100%" }}>
          <img src="/photos/adidas/surfboards.png" alt="surfboards" />
        </div>
      </section>

      <section className="adidas-sub-container">
        <img id="full-size-image" src="/photos/adidas/4-image-set.png" alt="four-surfers" />
      </section>

      <section className="adidas-breakers">
        <img src="/photos/adidas/idea.png" alt="idea" />
      </section>

      <section className="adidas-sub-container">
        <img
          id="full-size-image"
          src="/photos/adidas/adidas-two-logos.png"
          alt="black and white logos"
        />
      </section>

      <section className="adidas-breakers">
        <img src="/photos/adidas/colours.png" alt="colours" />
      </section>

      <section className="adidas-sub-container">
        <img id="full-size-image" src="/photos/adidas/adidas-six-logos.png" alt="colour logos" />
      </section>

      <section className="adidas-breakers">
        <img src="/photos/adidas/tagline-typography.png" alt="tagline typography" />
      </section>

      <section id="typography-demo">
        <h1 style={{ fontSize: "52px", paddingLeft: "10%" }}>People from the sea</h1>
        <br />
        <h2 style={{ textAlign: "center" }}>It is not about changing a logo.</h2>
        <h2 style={{ textAlign: "center" }}>It is about bringing you closer </h2>
        <h2 style={{ textAlign: "center" }}>to whom surfing is a lifestyle.</h2>
      </section>

      <section className="adidas-sub-container">
        <img src="/photos/adidas/people-from-the-sea-one.png" alt="people from the sea" />
      </section>

      <section className="adidas-sub-container" id="full-size-image">
        <img src="/photos/adidas/people-from-the-sea-two.png" alt="people from the sea" />
      </section>

      <section style={{ float: "right", marginTop: "160px" }} className="adidas-sub-container">
        <img src="/photos/adidas/adidas-blue-logo.png" alt="adidas blue logo" />
      </section>
    </div>
  );
}
