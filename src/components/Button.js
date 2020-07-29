import React from 'react';
import { Link } from 'gatsby';

const Button = (props) => {
  const { href, classNames, children } = props;
  return (
    <Link to={href} className={`button ${classNames}`}>
      {children}
    </Link>
  );
};

export default Button;
