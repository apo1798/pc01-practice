import Image from 'next/image';
import { Box } from '@mui/material';

type Props = { imageUrl: string; bgColor: string };

const ImageSection = ({ imageUrl, bgColor }: Props) => {
  return (
    <Box
      height={{ xs: '10rem', md: '100vh' }}
      flexBasis="50%"
      flexShrink="0"
      position={{ xs: 'relative', md: 'sticky' }}
      top={{ xs: 0, md: '3rem' }}
      bgcolor={bgColor}
      zIndex={10}
    >
      <Image
        priority
        src={
          imageUrl !== ''
            ? imageUrl
            : 'https://images.pexels.com/photos/6737849/pexels-photo-6737849.jpeg?auto=compress&cs=tinysrgb'
        }
        alt="1"
        fill
        style={{ objectFit: 'cover' }}
      />
    </Box>
  );
};

export default ImageSection;
