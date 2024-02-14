import React from "react";
import formimage from "../../assets/formimage.svg";

const svgComponent = (props) => {
  return (
    <div>
      <svg width="100" height="100">
        <image xlinkHref={formimage} />
      </svg>
    </div>
  );
};

export default svgComponent;
