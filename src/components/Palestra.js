import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';

const Palestra = (props) => {
  const { title, speaker, date, time } = props;

  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    console.log('click');
    setShowDetails(!showDetails);
  };

  return (
    <>
      <li className="palestra">
        <button onClick={() => handleClick()}>
          <SectionTitle small>{title}</SectionTitle>
          <p>Com {speaker}</p>
          <p>
            Dia {date} às {time}
          </p>
        </button>
      </li>
      {showDetails ? <p>Details</p> : null}
    </>
  );
};

export default Palestra;
