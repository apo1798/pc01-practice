import { MuiColorInput } from 'mui-color-input';
import styled from '@emotion/styled';

import { type FormValuesType } from '@/src/components/page/Index';
import { Box, Stack, Typography } from '@mui/material';
import { useFormikContext } from 'formik';

// setFieldValue={setFieldValue}
// primaryColor={values.primaryColor}
// textColor={values.textColor}

type Props = {
  primaryColor: string;
  textColor: string;
};

const PoMuiColorInput = styled(MuiColorInput)`
  & .MuiColorInput-TextField {
    padding: 0.5rem;
  }

  & .MuiColorInput-Button {
    padding: 0.5rem;
  }

  & .MuiInputBase-input {
    height: auto;
    padding: 0.6rem;
  }
`;

const ColorPicker = () =>
  // { primaryColor, textColor }: Props
  {
    const {
      setFieldValue,
      values: { textColor, primaryColor }
    } = useFormikContext<FormValuesType>();

    return (
      <Box>
        <Typography component="h4" variant="h6" fontWeight="500" flexShrink="0">
          顏色設定
        </Typography>
        <Stack spacing={2} direction={{ sx: 'column', md: 'row' }}>
          <Box>
            <Typography component="h2">頁首文字顏色</Typography>
            <PoMuiColorInput
              format="hex"
              value={textColor}
              onChange={(value) => {
                setFieldValue('textColor', value);
              }}
            />
          </Box>
          <Box>
            <Typography component="h2">主題色</Typography>
            <PoMuiColorInput
              format="hex"
              value={primaryColor}
              onChange={(value) => {
                setFieldValue('primaryColor', value);
              }}
            />
          </Box>
        </Stack>
      </Box>
    );
  };

export default ColorPicker;
