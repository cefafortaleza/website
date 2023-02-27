import classNames from 'classnames';
import {CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import {client} from '../../sanityClient';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

interface Slide {
  _key: string;
  _type: string;
  author: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  quote: string;
  textColor: string;
}

type Slides = Slide[];
interface Props {
  slides: Slides;
}

export default function HomeCarousel({slides}: Props) {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={400}
      totalSlides={3}
      isPlaying
      interval={6000}
      isIntrinsicHeight
      className="min-h-[300px] md:min-h-[400px]"
    >
      <Slider>
        {slides.map((slide, index) => {
          const imageUrl = builder.image(slide.image).url(); // Get the actual URL string of the image
          return (
            <Slide key={slide._key} index={index}>
              <div className="w-full h-full min-h-[300px] md:min-h-[400px] relative p-8 z-30">
                <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
                  <img
                    src={imageUrl}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={classNames(
                    'container mx-auto flex flex-col gap-2 justify-center z-20 relative w-full h-full'
                  )}
                >
                  <p
                    className={classNames('italic', {
                      'text-white': slide?.textColor === 'Branco',
                    })}
                  >
                    {slide.quote}
                  </p>
                  <p
                    className={classNames('font-[900]', {
                      'text-white': slide?.textColor === 'Branco',
                    })}
                  >
                    {slide.author}
                  </p>
                </div>
              </div>
            </Slide>
          );
        })}
      </Slider>
    </CarouselProvider>
  );
}
