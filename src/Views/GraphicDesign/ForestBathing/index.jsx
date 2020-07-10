import React from "react";
import "./index.css";

export default function ForestBathing() {
  return (
    <div className="black-background">
      <div className="fbc-main-container">
        <section className="fbc-sub-container">
          <img
            id="full-size-image fbc-first-image"
            src="/photos/forest-bathing-circle/forest-bathing-circle.png"
            alt="forest bathing circle"
          />
        </section>
        <h1 style={{ fontSize: "36px", marginBottom: "150px", color: "white"}}>
          The Forest Bathing Circle aims to help people (re)connect to nature and themselves in
          unexpected ways through forest bathing experiences. We stimulate nurturing nature like
          nature nurtures us.
        </h1>
        <h1 style={{ fontSize: "52px", color: "white" }}>IDEA</h1>
        <h1 style={{ fontSize: "36px", marginBottom: "150px", color: "white" }}>
          The inspiration comes from a minimal approach based in geometric shapes related to nature
          elements.
        </h1>
        <section className="fbc-sub-container">
          <img
            id="fbc-full-size-image"
            src="/photos/forest-bathing-circle/inspiration.png"
            alt="inspiration"
          />
        </section>

        <h1 style={{ fontSize: "52px", color: "white" }}>LOGO</h1>
        <section className="fbc-breakers">
          <img
            id="fbc-full-size-image"
            src="/photos/forest-bathing-circle/fbc-logo-1.png"
            alt="fbc-logo-1"
          />
        </section>
        <section className="fbc-breakers">
          <img
            id="fbc-full-size-image"
            src="/photos/forest-bathing-circle/fbc-logo-2.png"
            alt="fbc-logo-2"
          />
        </section>
        <h1 style={{ fontSize: "36px", color: "white" }}>
          The logomark is designed using geometric shapes of nature elements like trees, the sun and
          the unifying circle element connecting all elements together.
        </h1>
        <section className="fbc-sub-container">
          <img
            id="fbc-full-size-image"
            src="/photos/forest-bathing-circle/fbc-logo-3.png"
            alt="fbc-logo-3"
          />
        </section>
      </div>
    </div>
  );
}
