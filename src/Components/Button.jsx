import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, color, onClick, isDisabled, size, padding }) => {
  return (
    <button
      style={{ backgroundColor: color, fontSize: size, padding: padding }}
      onClick={onClick}
      disabled={isDisabled}

    >
      {text}
    </button>
  );
};

Button.propTypes = {
   text: PropTypes.string.isRequired,
   color: PropTypes.string,
   onClick: PropTypes.func,
   isDisabled: PropTypes.bool,
   size: PropTypes.oneOf(['small', 'medium', 'large']),
   padding:  PropTypes.string
 };
 
 Button.defaultProps = {
   color: 'blue',
   isDisabled: false,
   size: 'medium',
   padding: '10px'
 };

export default Button;
