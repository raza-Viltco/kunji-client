import React from "react";

import "./Card.css";

const Card = ({ className, width, children }) => {
  return (
    <div
      className={`custom_card__wrapper shadow  ${className} ${width || ""} `}
    >
      {children}
    </div>
  );
};

export default Card;
