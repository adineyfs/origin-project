import React from "react";
import PropTypes from "prop-types";
import "../../styles/ReusableLogo.scss";

const ReusableLogo = ({ imagePath, alt, className, children }) => {
  return (
    <div className={className ? className : "reusable-logo"}>
      <img src={imagePath} alt={alt} className="reusable-logo__img" />
      {children}
    </div>
  );
};

ReusableLogo.propTypes = {
  imagePath: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ReusableLogo;
