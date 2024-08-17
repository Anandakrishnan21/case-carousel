import React from "react";
import Slides from "./Slides";

function App() {
  return (
    <div className="component outer-div">
      <div className="wrapper container-wrapper">
        <Slides image="/images/image1.webp" />
        <Slides image="/images/image2.webp" />
        <Slides image="/images/image3.webp" />
      </div>
    </div>
  );
}

export default App;
