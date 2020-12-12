import React from 'react';
import Button from './Button';
import Flicking from '@egjs/react-flicking';

// import { Parallax, Fade, AutoPlay } from '@egjs/flicking-plugins';
// import {
//   FlickingEvent,
//   SelectEvent,
//   ChangeEvent,
//   NeedPanelEvent,
// } from '@egjs/flicking';

const MainSlides = ({ slides }) => {
  return (
    <Flicking
      tag="div"
      viewportTag="div"
      cameraTag="div"
      onNeedPanel={(e) => (NeedPanelEvent) => {}}
      onMoveStart={(e) => (FlickingEvent) => {}}
      onMove={(e) => (FlickingEvent) => {}}
      onMoveEnd={(e) => (FlickingEvent) => {}}
      onHoldStart={(e) => (FlickingEvent) => {}}
      onHoldEnd={(e) => (FlickingEvent) => {}}
      onRestore={(e) => (FlickingEvent) => {}}
      onSelect={(e) => (SelectEvent) => {}}
      onChange={(e) => (ChangeEvent) => {}}
      classPrefix="eg-flick"
      deceleration={0.0075}
      horizontal={true}
      circular={true}
      infinite={false}
      infiniteThreshold={0}
      lastIndex={Infinity}
      threshold={40}
      duration={100}
      panelEffect={(x) => 1 - Math.pow(1 - x, 3)}
      defaultIndex={0}
      inputType={['touch', 'mouse']}
      thresholdAngle={45}
      bounce={10}
      autoResize={false}
      adaptive={false}
      zIndex={2000}
      bound={false}
      overflow={false}
      hanger={'50%'}
      anchor={'50%'}
      gap={0}
      moveType={{ type: 'snap', count: 1 }}
      collectStatistics={true}
    >
      {slides.map((slide, index) => (
        <div className={`main-slide-item item-${index}`}>
          <div
            className="slide-wrapper"
            style={{
              background: `url(../img/${slide.background})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              textAlign: `${slide.align}`,
            }}
          >
            <div className={`slide-content ${slide.align} ${slide.color}`}>
              <p className="frase">{slide.frase}</p>
              <p className="autor">{slide.autor}</p>
            </div>
          </div>
        </div>
      ))}
    </Flicking>
  );
};

export default MainSlides;
