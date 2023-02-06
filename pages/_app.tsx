import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

const globalCache = createCache({ key: 'css' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CacheProvider value={globalCache}>
        <CssBaseline />
        <Component {...pageProps} />
      </CacheProvider>
    </>
  );
}

// reference: https://fybchristasker.vercel.app/blog/nextjs-with-mui
