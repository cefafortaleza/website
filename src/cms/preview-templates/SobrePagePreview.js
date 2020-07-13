import React from 'react';
import PropTypes from 'prop-types';
import { SobrePageTemplate } from '../../templates/sobre';

const SobrePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <SobrePageTemplate title={data.title} />;
  } else {
    return <div>Loading...</div>;
  }
};

SobrePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default SobrePagePreview;
