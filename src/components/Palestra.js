import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';

const Palestra = (props) => {
  const { id, title, speaker, date, time, description, displayDetail } = props;

  const handleClick = () => {
    displayDetail(id);
  };

  return (
    <>
      <li className="palestra" id={id}>
        <button onClick={handleClick}>
          <SectionTitle small>{title}</SectionTitle>
          <p>Com {speaker}</p>
          <p>
            Dia {date} às {time}
          </p>
        </button>
      </li>
    </>
  );
};

export default Palestra;
