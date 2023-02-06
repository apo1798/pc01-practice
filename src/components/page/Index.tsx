import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { Box, Button, TextField, Typography, Container } from '@mui/material';

import ColorPicker from '@/src/components/ColorPicker';
import DonationField from '@/src/components/DonationField';
import IFrame from '@/src/components/IFrame';
import NoSsr from '@/src/components/utils/NoSsr';
import TextEditor from '@/src/components/TextEditor';

type Props = unknown;

export type PageContentType = {
  textColor: string;
  bgColor: string;
  pageHtml: string;
};

export type FormValuesType = {
  pageTitle: string;
  textColor: string;
  bgColor: string;
  pageHtml: string;
  donations: string[];
};

const IndexPage = () => {
  const [isSettingHidden, setIsSettingHidden] = useState(true);

  const formInitialValues = {
    pageTitle: '範例網頁',
    textColor: '#000',
    bgColor: '#0e5ed6',
    pageHtml: '',
    donations: []
  };

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: formInitialValues,
    mode: 'onChange'
  });

  const onSubmit = (data: FormValuesType) => {
    console.log(data);
  };

  const html = watch('pageHtml');
  console.log(watch());

  return (
    <section className="space-y-5">
      <Button
        onClick={() => {
          setIsSettingHidden((state) => !state);
        }}
        variant="contained"
      >
        Toggle
      </Button>

      <Container maxWidth="xl" className="gap-x-2 p-4 lg:flex">
        {isSettingHidden && (
          <aside className="basis-2/5 rounded bg-gray-200 p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                {...register('pageTitle')}
                size="small"
                variant="filled"
                label="網頁名稱"
                placeholder="範例名稱"
              />
              <DonationField control={control} />
              <ColorPicker control={control} />
              <Button type="submit" variant="outlined">
                提交
              </Button>
              <TextEditor register={register} control={control} />
            </form>
          </aside>
        )}

        <Box flexGrow="1">
          <NoSsr>
            <IFrame>
              <Box component="section">
                <Box
                  py={0.5}
                  sx={{
                    color: watch('textColor'),
                    bgcolor: watch('bgColor'),
                    minHeight: '3.5rem'
                  }}
                  display="flex"
                  alignItems="center"
                >
                  <Typography
                    component="h3"
                    variant="h4"
                    fontWeight="600"
                    px={4}
                  >
                    {watch('pageTitle')}
                  </Typography>
                </Box>

                <Box
                  display={{
                    md: 'flex'
                  }}
                  gap={2}
                >
                  <Box position="relative" height={{ xs: '20rem', lg: 'auto' }}>
                    <Image
                      src="https://images.pexels.com/photos/6737849/pexels-photo-6737849.jpeg?auto=compress&cs=tinysrgb"
                      alt="1"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                  <Typography
                    color={{
                      xs: 'red',
                      md: 'orange',
                      lg: 'yellow'
                    }}
                  >
                    123123123123123
                  </Typography>
                  <Typography variant="h4" component="h2">
                    HELLO
                  </Typography>
                  <main dangerouslySetInnerHTML={{ __html: html }}>
                    {/* {html} */}
                  </main>
                </Box>
              </Box>
            </IFrame>
          </NoSsr>
        </Box>
      </Container>
      <p>{errors.bgColor?.message}</p>
    </section>
  );
};

export default IndexPage;
