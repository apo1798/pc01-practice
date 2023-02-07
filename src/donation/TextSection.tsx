import { Box, Stack, Typography } from '@mui/material';
import DividerHeader from '@/src/components/layout/DividerHeader';
import PageShare from '@/src/PageShare';

type Props = { title: string; pageHtml: string; primaryColor: string };

const TextSection = ({ title, pageHtml, primaryColor }: Props) => {
  return (
    <Box component="main" p={2}>
      <DividerHeader title="線上捐款" />
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
