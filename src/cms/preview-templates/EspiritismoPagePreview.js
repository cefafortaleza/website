import React from 'react';
import PropTypes from 'prop-types';
import { EspiritismoPageTemplate } from '../../templates/espiritismo';

const EspiritismoPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <EspiritismoPageTemplate title={data.title} />;
  } else {
    return <div>Loading...</div>;
  }
};

EspiritismoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default EspiritismoPagePreview;
