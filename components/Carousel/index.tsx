import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function HomeCarousel() {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={450}
      totalSlides={3}
      isPlaying
      interval={6000}
      isIntrinsicHeight
    >
      <Slider>
        <Slide index={0}>
          <div className="w-full h-full relative p-8">
            <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
              <img
                src="/cefa-banner-principal-3.jpeg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="container mx-auto flex flex-col gap-2 justify-center z-20 relative w-full h-full">
              <p className="italic">
                “A caridade que consiste na esmola dada aos pobres é a mais
                fácil de todas. Outra há, porém, muito mais penosa e,
                conseguintemente, muito mais meritória: a de perdoarmos aos que
                Deus colocou em nosso caminho para serem instrumentos do nosso
                sofrer e para nos porem à prova a paciência.”
              </p>
              <p className="font-[900]">
                Evangelho Segundo o Espiritismo, Cap. IX, item 7
              </p>
            </div>
          </div>
        </Slide>
        <Slide index={1}>
          <div className="w-full h-full relative p-8">
            <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
              <img
                src="/cefa-banner-principal-2.jpeg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="container mx-auto flex flex-col gap-2 justify-center z-20 relative w-full h-full">
              <p className="italic text-white">
                “A caridade que consiste na esmola dada aos pobres é a mais
                fácil de todas. Outra há, porém, muito mais penosa e,
                conseguintemente, muito mais meritória: a de perdoarmos aos que
                Deus colocou em nosso caminho para serem instrumentos do nosso
                sofrer e para nos porem à prova a paciência.”
              </p>
              <p className="font-[900] text-white">
                Evangelho Segundo o Espiritismo, Cap. XV, item 5
              </p>
            </div>
          </div>
        </Slide>
        <Slide index={2}>
          <div className="w-full h-full relative p-8">
            <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
              <img
                src="/cefa-banner-principal-1.jpeg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="container mx-auto flex flex-col gap-2 justify-center z-20 relative w-full h-full">
              <p className="italic text-white">
                “A casa do Pai é o Universo. As diferentes moradas são os mundos
                que circulam no espaço infinito e oferecem, aos Espíritos que
                neles encarnam, moradas correspondentes ao adiantamento dos
                mesmos Espíritos.”
              </p>
              <p className="font-[900] text-white">
                Evangelho Segundo o Espiritismo, Cap. II, item 2
              </p>
            </div>
          </div>
        </Slide>
      </Slider>
    </CarouselProvider>
  );
}
