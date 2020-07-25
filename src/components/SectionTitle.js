import React from 'react';

const SectionTitle = (props) => {
  const { children, big } = props;
  return (
    <>
      <h3 className={`section-title ${big ? 'big' : null}`}>{children}</h3>
    </>
  );
};

export default SectionTitle;
