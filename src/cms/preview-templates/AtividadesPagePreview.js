import React from 'react';
import PropTypes from 'prop-types';
import { AtividadesPageTemplate } from '../../templates/atividades';

const AtividadesPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <AtividadesPageTemplate title={data.title} />;
  } else {
    return <div>Loading...</div>;
  }
};

AtividadesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default AtividadesPagePreview;
