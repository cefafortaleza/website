import React from 'react';
import SectionTitle from '../SectionTitle';

const Palestra = (props) => {
  const { id, title, speaker, date, time, displayDetail } = props;

  const handleClick = () => {
    displayDetail(id);
  };

  return (
    <>
      <li className="palestra" id={id}>
        <button onClick={handleClick}>
          <SectionTitle small>{title}</SectionTitle>
          <p>Com <strong>{speaker}</strong></p>
          <p>
            Dia <strong>{date}</strong> às <strong>{time}</strong>
          </p>
        </button>
      </li>
    </>
  );
};

export default Palestra;
