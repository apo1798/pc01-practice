import { Button } from '@mui/material';
import { useFieldArray, type Control } from 'react-hook-form';
import { type FormValuesType } from '@/src/components/page/Index';

type Props = {
  control: Control<FormValuesType>;
};

const DonationField = ({ control }: Props) => {
  const { fields, append, prepend, remove, swap, move, insert } =
    useFieldArray<FormValuesType>({ name: 'donations', control });

  console.log({ fields });

  return (
    <div>
      DonationField
      <Button
        onClick={() => {
          append('100');
        }}
      >
        APPEND
      </Button>
    </div>
  );
};

export default DonationField;
