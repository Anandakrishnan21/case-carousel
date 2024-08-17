import React from "react";

function Slides({ image }) {
  return (
    <div className="slide grid relative overflow-clip">
      <img src={image} alt="image" />
    </div>
  );
}

export default Slides;
