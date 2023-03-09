import React from "react";

const Logo = ({ image }) => {
  return (
    <div className="site-logo">
      <img src={image} alt="" />
    </div>
  );
};

export default Logo;
