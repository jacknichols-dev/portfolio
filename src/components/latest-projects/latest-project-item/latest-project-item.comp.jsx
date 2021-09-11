import React from "react";
import "./latest-project-item.styles.scss";

const LatestProjectItem = ({ title, img }) => {
  return (
    <div className="project-item">
      <img src={img} alt={title} className="project-item__img" />
      <p>{title}</p>
    </div>
  );
};

export default LatestProjectItem;
