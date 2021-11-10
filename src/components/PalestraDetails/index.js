import React from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

const PalestraDetails = ({ palestra }) => {
  return (
    <Container className="palestra-detail-wrapper">
      
        <div className="image">
          {palestra.data}
        </div>
        <div className="details">
          <SectionTitle>{palestra.palestra}</SectionTitle>
          <h3>com {palestra.palestrante} | Dia {palestra.data} às {palestra.horario}</h3>
          <p>{palestra.descricao}</p>
        </div>
        <div className="location">
          <SectionTitle>Localização</SectionTitle>
          <p>{palestra.full_address}</p>
          <p>Contato: {palestra.telefone}</p>
        </div>
    </Container>
  );
};

export default PalestraDetails;
