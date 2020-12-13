import React from 'react';

const PageHeader = ({ background, id }) => (
  <div
    className="page-header"
    id={id}
    style={{
      background: `url(${background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  />
);

export default PageHeader;
