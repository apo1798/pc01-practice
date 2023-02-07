import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

// import { theme } from '@/src/components/layout/theme';

const globalCache = createCache({ key: 'css' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <CacheProvider value={globalCache}>
        <CssBaseline />
        <Component {...pageProps} />
      </CacheProvider>
      {/* </ThemeProvider> */}
    </>
  );
}

// reference: https://fybchristasker.vercel.app/blog/nextjs-with-mui
