import Image from 'next/image';
import { Box, Typography } from '@mui/material';

import IFrame from '@/src/components/IFrame';
import { type FormValuesType } from '@/src/components/page/Index';
import NoSsr from '@/src/components/utils/NoSsr';
import ImageSection from '@/src/donation/ImageSection';
import TextSection from '@/src/donation/TextSection';

type Props = { formValues: FormValuesType };

const PreviewIFrame = ({ formValues }: Props) => {
  const { textColor, primaryColor, pageHtml, title, donations, images } =
    formValues;

  return (
    <Box p={2} display="flex" justifyContent="center">
      <NoSsr>
        <IFrame>
          <Box component="section" display="flex" flexDirection="column">
            <Box
              py={0.5}
              sx={{
                color: textColor,
                bgcolor: primaryColor,
                minHeight: '3.5rem'
              }}
              display="flex"
              alignItems="center"
              component="header"
              position="sticky"
              top="0"
              zIndex="20"
            >
              <Typography component="h3" variant="h5" fontWeight="600" px={4}>
                {title}
              </Typography>
            </Box>

            <Box
              display={{
                md: 'flex'
              }}
              flexGrow="1"
              gap={2}
            >
              {/* Content Section */}
              <ImageSection images={images} primaryColor={primaryColor} />

              <TextSection
                title={title}
                pageHtml={pageHtml}
                primaryColor={primaryColor}
                donations={donations}
              />
            </Box>
          </Box>
        </IFrame>
      </NoSsr>
    </Box>
  );
};

export default PreviewIFrame;
