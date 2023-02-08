import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Stack,
  Link as MuiLink,
  Alert,
  IconButton,
  Tooltip
} from '@mui/material';

import ColorPicker from '@/src/components/ColorPicker';
import PreviewIFrame from '@/src/PreviewIFrame';
import { blueGrey, grey } from '@mui/material/colors';

import {
  useFormik,
  FieldArray,
  FormikProvider,
  type FormikTouched
} from 'formik';
import * as yup from 'yup';
import {
  Delete as DeleteIcon,
  Info as InfoIcon,
  Add as AddIcon
} from '@mui/icons-material';
import ImageSwiper from '@/src/donation/ImageSwiper';
import TextEditor from '@/src/components/TextEditor';
import { useSnackbar } from 'notistack';

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
  images: ImageObjectType[];
  donations: string[];
};

export type ImageObjectType = { url: string };

// const ResizableBoxDiv = styled(ResizableBox)``;
const validationSchema = yup.object().shape({
  title: yup.string().required(),
  textColor: yup.string().required(),
  primaryColor: yup.string().required(),
  pageHtml: yup.string().required(),
  images: yup.array().of(
    yup.object({
      url: yup.string().url('請輸入 `https://` 開頭URL').required('請輸入URL')
    })
  ),
  donations: yup
    .array()
    .of(yup.number().typeError('請輸入數字').required('請輸入金額'))
});

const IndexPage = () => {
  const [formInitialValues, setFormInitialValues] = useState({
    title: '林聰明市長後援',
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
    images: [{ url: '' }],
    donations: ['100', '200', '500', '1000', '2000', '3000']
  });

  const { enqueueSnackbar } = useSnackbar();

  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema,
    onSubmit: (values) => {
      localStorage.setItem('formInitialValues', JSON.stringify(values));
      enqueueSnackbar('儲存成功！');
    },
    enableReinitialize: true
  });
  const {
    values,
    handleSubmit,
    handleReset,
    handleChange,
    touched,
    errors,
    dirty
  } = formik;

  useEffect(() => {
    const prevFormValues = localStorage.getItem('formInitialValues');
    if (prevFormValues) {
      setFormInitialValues(JSON.parse(prevFormValues) as FormValuesType);
    }
  }, []);

  return (
    <section>
      <Stack
        direction="row"
        maxWidth="120rem"
        sx={{
          maxWidth: '120rem'
        }}
      >
        <FormikProvider value={formik}>
          <Box
            borderRight={`4px solid ${grey['700']}`}
            maxHeight="100vh"
            overflow="auto"
            sx={{ resize: 'horizontal', minWidth: '24rem', width: '30rem' }}
          >
            <>
              <Box
                component="aside"
                bgcolor={blueGrey[50]}
                p={2}
                borderRadius={1}
              >
                <Typography component="h3" variant="h5" fontWeight="bold">
                  介紹設定
                </Typography>

                <Stack
                  component="form"
                  spacing={2}
                  pt={1}
                  onSubmit={handleSubmit}
                >
                  <TextField
                    fullWidth
                    id="title"
                    name="title"
                    size="small"
                    variant="standard"
                    label="組織名稱"
                    placeholder="範例名稱"
                    value={values.title}
                    onChange={handleChange}
                    error={touched.title && !!errors.title}
                    helperText={touched.title && errors.title}
                  />
                  <ColorPicker />
                  <Stack spacing={0.5}>
                    <Stack direction="row" gap={1} alignItems="center">
                      <Typography
                        component="h4"
                        variant="h6"
                        fontWeight="500"
                        flexShrink="0"
                      >
                        相片設定
                      </Typography>
                      <Tooltip
                        title="兩張圖片以上將轉成輪播形式，最多可放三張圖片"
                        arrow
                      >
                        <IconButton color="info">
                          <InfoIcon />
                        </IconButton>
                      </Tooltip>
                    </Stack>

                    <FieldArray
                      name="images"
                      render={({ push, remove }) => {
                        return (
                          <Stack spacing={2}>
                            {values.images.length > 0 &&
                              values.images.map((image, index) => (
                                <Stack
                                  key={index}
                                  direction="row"
                                  alignItems="center"
                                >
                                  <TextField
                                    fullWidth
                                    size="small"
                                    variant="standard"
                                    label={`圖片${index + 1}連結`}
                                    id={`images.${index}.url`}
                                    name={`images.${index}.url`}
                                    placeholder="https://example.com"
                                    error={
                                      touched?.images?.[index] &&
                                      !!errors?.images?.[index]
                                    }
                                    value={image.url}
                                    onChange={handleChange}
                                    helperText={
                                      touched?.images?.[index].url &&
                                      typeof errors?.images?.[index] ===
                                        'object'
                                        ? (
                                            errors?.images?.[
                                              index
                                            ] as ImageObjectType
                                          )?.url
                                        : ''
                                    }
                                  />
                                  {values.images.length > 1 && (
                                    <IconButton
                                      onClick={() => {
                                        remove(index);
                                      }}
                                      color="error"
                                      title="移除"
                                    >
                                      <DeleteIcon fontSize="small" />
                                    </IconButton>
                                  )}
                                </Stack>
                              ))}
                            {values.images.length < 3 && (
                              <Box textAlign="end">
                                <Button
                                  variant="contained"
                                  color="info"
                                  onClick={() => {
                                    push({ url: '' });
                                  }}
                                >
                                  新增圖片連結
                                </Button>
                              </Box>
                            )}
                          </Stack>
                        );
                      }}
                    />
                  </Stack>

                  <Stack spacing={0.5}>
                    <Stack direction="row" gap={1} alignItems="center">
                      <Typography
                        component="h4"
                        variant="h6"
                        fontWeight="500"
                        flexShrink="0"
                      >
                        金額設定
                      </Typography>
                      <Tooltip title="最少三個選項、最多六個選項" arrow>
                        <IconButton color="info">
                          <InfoIcon />
                        </IconButton>
                      </Tooltip>
                    </Stack>

                    <FieldArray
                      name="donations"
                      render={({ push, remove }) => {
                        return (
                          <Grid container spacing={2} width="100%">
                            {values.donations.length > 0 &&
                              values.donations.map((donation, index) => (
                                <Grid
                                  item
                                  xs={6}
                                  lg={4}
                                  key={index}
                                  display="flex"
                                >
                                  <TextField
                                    fullWidth
                                    size="small"
                                    variant="standard"
                                    label={`金額${index + 1}`}
                                    id={`donations.${index}`}
                                    name={`donations.${index}`}
                                    placeholder="500"
                                    error={
                                      !!(
                                        touched.donations as
                                          | Array<FormikTouched<string>>
                                          | undefined
                                      )?.[index] && !!errors?.donations?.[index]
                                    }
                                    value={donation}
                                    onChange={handleChange}
                                    helperText={
                                      (
                                        touched?.donations as
                                          | Array<FormikTouched<string>>
                                          | undefined
                                      )?.[index] && errors?.donations?.[index]
                                    }
                                  />
                                  {values.donations.length > 3 && (
                                    <IconButton
                                      onClick={() => {
                                        remove(index);
                                      }}
                                      title="移除"
                                      color="error"
                                    >
                                      <DeleteIcon fontSize="small" />
                                    </IconButton>
                                  )}
                                </Grid>
                              ))}
                            {values.donations.length < 6 && (
                              <Grid item xs={12} mt={1}>
                                <Box textAlign="end">
                                  <Button
                                    variant="contained"
                                    color="info"
                                    onClick={() => {
                                      push('');
                                    }}
                                    startIcon={<AddIcon />}
                                  >
                                    新增金額選項
                                  </Button>
                                </Box>
                              </Grid>
                            )}
                          </Grid>
                        );
                      }}
                    />
                  </Stack>

                  <TextEditor />

                  <Stack
                    direction={{ sx: 'column', sm: 'row' }}
                    gap={2}
                    justifyContent="flex-end"
                  >
                    <Button
                      type="button"
                      variant="contained"
                      color="warning"
                      fullWidth
                      onClick={handleReset}
                      sx={{ maxWidth: '8rem' }}
                    >
                      回復設定
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{ maxWidth: '8rem' }}
                      disabled={!dirty}
                    >
                      儲存設定
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </>
          </Box>

          <Grid item flexGrow="1" sx={{ minWidth: '32rem' }}>
            <PreviewIFrame formValues={values} />
          </Grid>
        </FormikProvider>
      </Stack>
    </section>
  );
};

export default IndexPage;
