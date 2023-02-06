import { type Dispatch, type SetStateAction } from 'react';
import { matchIsValidColor, MuiColorInput } from 'mui-color-input';
import styled from '@emotion/styled';
import { Controller, type Control } from 'react-hook-form';

import {
  type FormValuesType,
  type PageContentType
} from '@/src/components/page/Index';
import { Typography } from '@mui/material';

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
    <div className="space-y-7">
      <div>
        <Typography component="h2">TEXT COLOR</Typography>
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
      </div>
      <div>
        <Typography component="h2">BG COLOR</Typography>
        <Controller
          name="bgColor"
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
      </div>
    </div>
  );
};

export default ColorPicker;
