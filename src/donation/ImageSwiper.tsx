import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { type FormValuesType } from '@/src/components/page/Index';
import Image from 'next/image';
import styled from '@emotion/styled';
import ImageSwiperContainer from '@/src/utils/ImageSwiperContainer';

type Props = {
  images: FormValuesType['images'];
  primaryColor: FormValuesType['primaryColor'];
};

const ImageContainer = styled.div`
  position: relative;
  height: 30rem;
`;

const ImageSwiper = ({ images, primaryColor }: Props) => {
  return (
    <>
      {/* iframe 裡面讀不到... */}
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link href="./image-swiper.css" rel="stylesheet"></link>

      <Carousel
        dynamicHeight={true}
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
        // showArrows={false}
        showStatus={false}
        showIndicators={false}
      >
        {images.map((image, i) => {
          const imageUrl =
            image.url ||
            'https://images.unsplash.com/photo-1675711450153-a539472e7e27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60';

          return (
            <ImageSwiperContainer
              primaryColor={primaryColor}
              key={imageUrl + i.toString()}
            >
              <Image
                src={imageUrl}
                alt=""
                fill
                style={{ objectFit: 'cover' }}
              />
            </ImageSwiperContainer>
          );
        })}
      </Carousel>
    </>
  );
};

export default ImageSwiper;
