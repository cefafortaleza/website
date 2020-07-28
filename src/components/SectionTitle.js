import React from 'react';

const SectionTitle = (props) => {
  const { children, big, small } = props;
  return (
    <>
      <h3
        className={`section-title ${big ? 'big' : ''} ${small ? 'small' : ''}`}
      >
        {children}
      </h3>
    </>
  );
};

export default SectionTitle;
