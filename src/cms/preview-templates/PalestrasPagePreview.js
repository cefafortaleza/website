import React from 'react';
import PropTypes from 'prop-types';
import { PalestrasPageTemplate } from '../../templates/palestras';

const PalestrasPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <PalestrasPageTemplate title={data.title} />;
  } else {
    return <div>Loading...</div>;
  }
};

PalestrasPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default PalestrasPagePreview;
