import React from "react";
import SubImage from "../../images/sub-header.jpg";
import "./SubHeader.css";

const SubHeader = () => {
  return (
    <section className="sub-header">
      <img src={SubImage} alt="" />
    </section>
  );
};

export default SubHeader;
