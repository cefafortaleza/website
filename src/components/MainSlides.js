import React from 'react';
import Flicking from '@egjs/react-flicking';
import Button from './Button';

const MainSlides = ({ slides }) => {
  console.log('SLIDES: ', slides);

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
      defaultIndex={3}
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
              <div className="buttons-wrapper">
                {slide.primeiro_botao_link !== '' && (
                  <Button href={slide.primeiro_botao_link}>
                    {slide.primeiro_botao_texto}
                  </Button>
                )}
                {slide.segundo_botao_link !== '' && (
                  <Button href={slide.segundo_botao_link}>
                    {slide.segundo_botao_texto}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className={`main-slide-item item-4`}>
        <div
          className="slide-wrapper"
          style={{
            background: `#f3f3f3`,
            textAlign: `left`,
          }}
        >
          <div className={`slide-content left black`}>
            <p className="autor">
              Atenção inscritos no ESDE-1 do CEFA!! <br /> Segue o link para as
              salas virtuais:
            </p>
            <div className="buttons-wrapper">
              <Button href="https://meet.google.com/ije-ydfj-kvu">
                Sábados, 17h30min
              </Button>

              <Button href="https://meet.google.com/mtf-cerb-yyh">
                Segundas, 19h30min
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Flicking>
  );
};

export default MainSlides;
