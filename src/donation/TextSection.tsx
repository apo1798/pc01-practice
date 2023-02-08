import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import DividerHeader from '@/src/components/layout/DividerHeader';
import PageShare from '@/src/PageShare';

import { type FormValuesType } from '@/src/components/page/Index';

type Props = {
  title: FormValuesType['title'];
  pageHtml: FormValuesType['pageHtml'];
  primaryColor: FormValuesType['primaryColor'];
  donations: FormValuesType['donations'];
};

const TextSection = ({ title, pageHtml, primaryColor, donations }: Props) => {
  return (
    <Box component="main" p={2}>
      <DividerHeader title="線上捐款" />
      <Grid container rowSpacing={1} columnSpacing={1.5}>
        {donations.map((donation, i) => (
          <Grid item xs={4} md={4} lg={3} key={donation + i.toString()}>
            <Button variant="outlined" fullWidth size="large">
              {donation || '請輸入金額'}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Stack direction="row" flexWrap="wrap">
        <Typography
          component="h1"
          variant="h4"
          fontWeight="bold"
          color={primaryColor}
        >
          {title}
        </Typography>
        <Box ml="auto">
          <PageShare />
        </Box>
      </Stack>
      <Box
        component="section"
        py={1}
        dangerouslySetInnerHTML={{ __html: pageHtml }}
      ></Box>
    </Box>
  );
};

export default TextSection;
