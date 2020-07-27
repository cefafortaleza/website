import React from 'react';

import {
  FlickingEvent,
  SelectEvent,
  ChangeEvent,
  NeedPanelEvent,
} from '@egjs/flicking';
import Flicking from '@egjs/react-flicking';
import { Parallax, Fade, AutoPlay } from '@egjs/flicking-plugins';

const MainSlides = (props) => {
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
      <div className="main-slide-item">
        <p className="subtitle">Palestra da semana</p>
        <h1 className="title">No Mundo Maior</h1>
        <p className="subtitle">com Angela Linhares | Dia 31/07 às 19:30</p>
        <span>Botão</span>
      </div>
      <div className="main-slide-item">
        <p className="subtitle">Subtitle Top 2</p>
        <h1 className="title">Title 2</h1>
        <p className="subtitle">Subtitle Bottom 2</p>
        <span>Button 2</span>
      </div>
      <div className="main-slide-item">
        <p className="subtitle">Subtitle Top 3</p>
        <h1 className="title">Title 3</h1>
        <p className="subtitle">Subtitle Bottom 3</p>
        <span>Button 3</span>
      </div>
    </Flicking>
  );
};

export default MainSlides;
