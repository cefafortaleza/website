import React from 'react';

const RichText = ({ children, classes }) => {
  return (
    <div
      className={`richText-wrapper ${classes}`}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};

export default RichText;
