import React from "react";
import PropTypes from "prop-types";
import "../../styles/ReusableLogo.scss";

const ReusableLogo = ({ imagePath, alt, className, children }) => {
  return (
    <div className={className}>
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

ReusableLogo.defaultProps = {
  imagePath: "",
  alt: "Logo",
  className: "reusable-logo",
  children: <div></div>,
};

export default ReusableLogo;
