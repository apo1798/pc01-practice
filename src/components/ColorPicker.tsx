import { matchIsValidColor, MuiColorInput } from 'mui-color-input';
import styled from '@emotion/styled';
import { Controller, type Control } from 'react-hook-form';

import { type FormValuesType } from '@/src/components/page/Index';
import { Box, Stack, Typography } from '@mui/material';

type Props = {
  control: Control<FormValuesType>;
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

const ColorPicker = ({ control }: Props) => {
  return (
    <Stack spacing={2} direction={{ sx: 'column', lg: 'row' }}>
      <Box>
        <Typography component="h2">頁首文字顏色</Typography>
        <Controller
          name="textColor"
          control={control}
          rules={{ validate: matchIsValidColor }}
          render={({ field, fieldState }) => (
            <PoMuiColorInput
              {...field}
              format="hex"
              helperText={fieldState.invalid ? 'Color is invalid' : ''}
              error={fieldState.invalid}
            />
          )}
        />
      </Box>
      <Box>
        <Typography component="h2">主題色</Typography>
        <Controller
          name="primaryColor"
          control={control}
          rules={{ validate: matchIsValidColor }}
          render={({ field, fieldState }) => (
            <PoMuiColorInput
              {...field}
              format="hex"
              helperText={fieldState.invalid ? 'Color is invalid' : ''}
              error={fieldState.invalid}
            />
          )}
        />
      </Box>
    </Stack>
  );
};

export default ColorPicker;
