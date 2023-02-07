import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Stack,
  Link as MuiLink,
  Alert
} from '@mui/material';

import ColorPicker from '@/src/components/ColorPicker';
import DonationField from '@/src/components/DonationField';
import TextEditor from '@/src/components/TextEditor';
import PreviewIFrame from '@/src/PreviewIFrame';
import { blueGrey, grey } from '@mui/material/colors';

export type PageContentType = {
  textColor: string;
  primaryColor: string;
  pageHtml: string;
};

export type FormValuesType = {
  title: string;
  textColor: string;
  primaryColor: string;
  pageHtml: string;
  imageUrl: string;
  donations: string[];
};

const IndexPage = () => {
  const [isSettingHidden, setIsSettingHidden] = useState(true);

  const formInitialValues = {
    title: '泛科知識',
    textColor: '#ffffff',
    primaryColor: '#2b589a',
    pageHtml: `<h1 data-cy="profile-info-item-title">[問卦] 現在想買PS5是傻子的決定嗎</h1>
    <div class="content editorContent" data-cy="profile-info-content">
    <h3><strong>想玩就買3C產品就這樣 有啥好傻不傻的</strong></h3>
    <p>最近看新聞說PS5不缺貨了，是打電話到遠百信義店及網路上查詢  ，現貨確實都很充足，雖然有些要同款綁定遊戲片，有點想買來玩但是過不去的點也是大家在討論的，都已經2023了還在買2020的主機規格，但若繼續當等等黨等下一代的pro聽說要到2028？，也不知道這新聞是不是真的。</p>
    <p>現在買PS5是很傻的決定嗎還是不要管這麼多買來玩就是爽，要買嗎？ 還是當等等黨？</p></div><h1 data-cy="profile-info-item-title">[問卦] 現在想買PS5是傻子的決定嗎</h1>
    <div class="content editorContent" data-cy="profile-info-content">
    <h3><strong>想玩就買3C產品就這樣 有啥好傻不傻的</strong></h3>
    <p>最近看新聞說PS5不缺貨了，是打電話到遠百信義店及網路上查詢  ，現貨確實都很充足，雖然有些要同款綁定遊戲片，有點想買來玩但是過不去的點也是大家在討論的，都已經2023了還在買2020的主機規格，但若繼續當等等黨等下一代的pro聽說要到2028？，也不知道這新聞是不是真的。</p>
    <p>現在買PS5是很傻的決定嗎還是不要管這麼多買來玩就是爽，要買嗎？ 還是當等等黨？</p></div><h1 data-cy="profile-info-item-title">[問卦] 現在想買PS5是傻子的決定嗎</h1>
    <div class="content editorContent" data-cy="profile-info-content">
    <h3><strong>想玩就買3C產品就這樣 有啥好傻不傻的</strong></h3>
    <p>最近看新聞說PS5不缺貨了，是打電話到遠百信義店及網路上查詢  ，現貨確實都很充足，雖然有些要同款綁定遊戲片，有點想買來玩但是過不去的點也是大家在討論的，都已經2023了還在買2020的主機規格，但若繼續當等等黨等下一代的pro聽說要到2028？，也不知道這新聞是不是真的。</p>
    <p>現在買PS5是很傻的決定嗎還是不要管這麼多買來玩就是爽，要買嗎？ 還是當等等黨？</p></div><h1 data-cy="profile-info-item-title">[問卦] 現在想買PS5是傻子的決定嗎</h1>
    <div class="content editorContent" data-cy="profile-info-content">
    <h3><strong>想玩就買3C產品就這樣 有啥好傻不傻的</strong></h3>
    <p>最近看新聞說PS5不缺貨了，是打電話到遠百信義店及網路上查詢  ，現貨確實都很充足，雖然有些要同款綁定遊戲片，有點想買來玩但是過不去的點也是大家在討論的，都已經2023了還在買2020的主機規格，但若繼續當等等黨等下一代的pro聽說要到2028？，也不知道這新聞是不是真的。</p>
    <p>現在買PS5是很傻的決定嗎還是不要管這麼多買來玩就是爽，要買嗎？ 還是當等等黨？</p></div><h1 data-cy="profile-info-item-title">[問卦] 現在想買PS5是傻子的決定嗎</h1>
    <div class="content editorContent" data-cy="profile-info-content">
    <h3><strong>想玩就買3C產品就這樣 有啥好傻不傻的</strong></h3>
    <p>最近看新聞說PS5不缺貨了，是打電話到遠百信義店及網路上查詢  ，現貨確實都很充足，雖然有些要同款綁定遊戲片，有點想買來玩但是過不去的點也是大家在討論的，都已經2023了還在買2020的主機規格，但若繼續當等等黨等下一代的pro聽說要到2028？，也不知道這新聞是不是真的。</p>
    <p>現在買PS5是很傻的決定嗎還是不要管這麼多買來玩就是爽，要買嗎？ 還是當等等黨？</p></div>`,
    imageUrl: '',
    donations: ['']
  };

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: formInitialValues,
    mode: 'onChange'
  });

  const onSubmit = (data: FormValuesType) => {
    console.log(data);
  };

  const formValues = watch();

  return (
    <section className="space-y-5">
      <Stack
        direction="row"
        // container
        // spacing={4}
        // p={4}
        maxWidth="120rem"
        sx={{
          maxWidth: '120rem'
        }}
      >
        <Grid
          item
          // xs={12}
          // md={4}
          borderRight={`4px solid ${grey['700']}`}
          maxHeight="100vh"
          overflow="auto"
          sx={{ resize: 'horizontal', minWidth: '24rem' }}
        >
          {isSettingHidden && (
            <>
              <Box
                component="aside"
                bgcolor={blueGrey[50]}
                p={2}
                borderRadius={1}
              >
                <Typography component="h4" variant="h6">
                  介紹設定
                </Typography>
                <Stack
                  onSubmit={handleSubmit(onSubmit)}
                  component="form"
                  spacing={2}
                  pt={1}
                >
                  <TextField
                    {...register('title')}
                    size="small"
                    variant="standard"
                    label="組織名稱"
                    placeholder="範例名稱"
                    fullWidth
                  />
                  <Stack spacing={1}>
                    <TextField
                      {...register('imageUrl')}
                      size="small"
                      variant="standard"
                      label="圖片連結"
                      placeholder="https://example.com"
                      fullWidth
                    />
                    <Grid container columnGap={2}>
                      <Grid item>
                        <MuiLink
                          href="https://unsplash.com/"
                          target="_blank"
                          referrerPolicy="no-referrer"
                        >
                          UnSplash
                        </MuiLink>
                      </Grid>
                      <Grid item>
                        <MuiLink
                          href="https://www.pexels.com/zh-tw/"
                          target="_blank"
                          referrerPolicy="no-referrer"
                        >
                          Pexel
                        </MuiLink>
                      </Grid>
                    </Grid>
                    <Alert severity="warning">
                      照片僅支援上方兩個圖庫照片。如需要自訂圖片，請上傳。
                    </Alert>
                  </Stack>
                  <DonationField control={control} />
                  <ColorPicker control={control} />
                  <TextEditor register={register} control={control} />
                  <Stack
                    direction={{ sx: 'column', md: 'row' }}
                    gap={2}
                    justifyContent="flex-end"
                  >
                    <Button
                      type="button"
                      variant="contained"
                      color="error"
                      fullWidth
                      onClick={() => {
                        reset();
                      }}
                      sx={{ maxWidth: '10rem' }}
                    >
                      回復設定
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{ maxWidth: '10rem' }}
                    >
                      儲存設定
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </>
          )}
        </Grid>

        <Grid
          item
          // xs={12} md={8}
          flexGrow="1"
          sx={{ minWidth: '32rem' }}
        >
          <PreviewIFrame formValues={formValues} />
        </Grid>
      </Stack>
    </section>
  );
};

export default IndexPage;
