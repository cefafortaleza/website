import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';

const Palestra = (props) => {
  const { id, title, speaker, date, time, description } = props;

  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    console.log('click');
    setShowDetails(!showDetails);
  };

  return (
    <>
      <li className="palestra" id={id}>
        <button onClick={() => handleClick()}>
          <SectionTitle small>{title}</SectionTitle>
          <p>Com {speaker}</p>
          <p>
            Dia {date} às {time}
          </p>
        </button>
      </li>
      {showDetails ? (
        <div className="palestra-details">
          <div className="palestra">
            <div className="logo">
              <p>Logo</p>
            </div>
            <div className="sobre">
              <SectionTitle>{title}</SectionTitle>
              <p>Com {speaker}</p>
              <p>
                Dia {date} às {time}
              </p>
              <p>{description}</p>
            </div>
          </div>
          <div className="localizacao"></div>
        </div>
      ) : null}
    </>
  );
};

export default Palestra;
