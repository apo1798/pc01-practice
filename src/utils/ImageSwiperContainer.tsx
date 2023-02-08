import { type ReactNode } from 'react';
import { Box } from '@mui/material';

type Props = {
  primaryColor: string;
  children: ReactNode;
};

const ImageSwiperContainer = ({ primaryColor, children }: Props) => {
  return (
    <Box
      height={{ xs: '20rem', md: '100vh' }}
      flexBasis="50%"
      flexShrink="0"
      position={{ xs: 'relative', md: 'sticky' }}
      top={{ xs: 0, md: '3rem' }}
      bgcolor={primaryColor}
      zIndex={10}
    >
      {children}
    </Box>
  );
};

export default ImageSwiperContainer;
