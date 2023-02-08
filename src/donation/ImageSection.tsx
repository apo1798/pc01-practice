import Image from 'next/image';
import { Box } from '@mui/material';
import { type FormValuesType } from '@/src/components/page/Index';
import ImageSwiper from '@/src/donation/ImageSwiper';

import ImageSwiperContainer from '@/src/utils/ImageSwiperContainer';

type Props = {
  images: FormValuesType['images'];
  primaryColor: FormValuesType['primaryColor'];
};

const ImageSection = ({ images, primaryColor }: Props) => {
  return (
    <ImageSwiperContainer primaryColor={primaryColor}>
      {images.length === 1 ? (
        <Image
          priority
          src={
            images.at(0)?.url
              ? (images.at(0)?.url as string)
              : 'https://images.pexels.com/photos/6737849/pexels-photo-6737849.jpeg?auto=compress&cs=tinysrgb'
          }
          alt="1"
          fill
          style={{ objectFit: 'cover' }}
        />
      ) : (
        <>
          <ImageSwiper images={images} primaryColor={primaryColor} />
        </>
      )}
    </ImageSwiperContainer>
  );
};

export default ImageSection;
