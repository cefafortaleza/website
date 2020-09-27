import React from 'react';

const Container = (props) => {
  const { children, className, id } = props;
  return <div id={id} className={`container ${className ? className : ''}`}>{children}</div>;
};

export default Container;
