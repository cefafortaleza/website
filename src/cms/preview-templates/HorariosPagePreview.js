import React from 'react';
import PropTypes from 'prop-types';
import { HorariosPageTemplate } from '../../templates/horarios';

const HorariosPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <HorariosPageTemplate title={data.title} />;
  } else {
    return <div>Loading...</div>;
  }
};

HorariosPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default HorariosPagePreview;
