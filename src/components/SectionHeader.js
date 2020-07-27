import React from 'react';

const SectionHeader = (props) => {
  const { title, buttonText, buttonLink } = props;

  return (
    <div className="section-header-wrapper">
      <h1>{title}</h1>
      <p>{buttonText}</p>
      <p>{buttonLink}</p>
    </div>
  );
};

export default SectionHeader;
