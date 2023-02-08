import { Box, Typography } from '@mui/material';

import { type FormValuesType } from '@/src/components/page/Index';
import ImageSection from '@/src/donation/ImageSection';
import TextSection from '@/src/donation/TextSection';
import { useState, useEffect } from 'react';

const Preview = () => {
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

  useEffect(() => {
    const prevFormValues = localStorage.getItem('formInitialValues');
    if (prevFormValues) {
      setFormInitialValues(JSON.parse(prevFormValues) as FormValuesType);
    }
  }, []);

  const { textColor, primaryColor, pageHtml, title, donations, images } =
    formInitialValues;

  return (
    <Box display="flex" justifyContent="center">
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
    </Box>
  );
};

export default Preview;
