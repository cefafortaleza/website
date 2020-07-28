import React from 'react';
import Button from './Button';

const SectionHeader = (props) => {
  const { title, buttonText, buttonLink, id, black } = props;

  return (
    <div className={`section-header-wrapper ${black ? 'black' : ''}`} id={id}>
      <h1>{title}</h1>
      <Button href={buttonLink}>{buttonText}</Button>
    </div>
  );
};

export default SectionHeader;
