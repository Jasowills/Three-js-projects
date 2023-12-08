import React from "react";
import EarthCanvas from "./Earth";

const Main = () => {
  return (
    <div className="main">
      <div className="hero">
        <h2>This Is a three Js project big text</h2>
        <p>
          The project developed using three js points and PerspectiveCamera,<br/>
          BufferGeometry, WebGLRenderer.
        </p>
        <button>Learn More</button>
      </div>
      <div className="earth">
        <EarthCanvas/>
      </div>
    </div>
  );
};

export default Main;
