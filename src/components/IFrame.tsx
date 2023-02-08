import { type ChangeEvent, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import {
  Box,
  CssBaseline,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  type SelectChangeEvent
} from '@mui/material';
import styled from '@emotion/styled';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

type Props = {
  children: ReactNode;
};

const PreviewIfame = styled('iframe')(() => ({
  minHeight: '80vh',
  width: '100%',
  border: '1px solid #777',
  boxShadow:
    '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);',
  transition: 'all 300ms ease-in-out',
  margin: '0 auto'
}));

type IFrameWidthKeys = keyof typeof iframeWidth;
const iframeWidth = { computer: '100%', phone: '20rem' } as const;

const IFrame = ({ children, ...props }: Props) => {
  const [contentRef, setContentRef] = useState<any>(null);
  const [displayMode, setDisplayMode] = useState<IFrameWidthKeys>('computer');
  // const contentRef = useRef<HTMLIFrameElement>(null);
  const mountNode = contentRef?.contentWindow?.document?.body;

  const cache = createCache({
    key: 'iframe-css',
    container: contentRef?.contentWindow?.document?.head
    // prepend: true
  });

  return (
    <>
      <Stack spacing={2} width="100%">
        <Box>
          <FormControl>
            <InputLabel id="display-mode-label">顯示裝置</InputLabel>
            <Select
              labelId="display-mode-label"
              id="display-mode-select"
              value={displayMode}
              label="display-mode"
              onChange={(e: SelectChangeEvent<IFrameWidthKeys>) => {
                const value = e.target.value;
                // if (Object.keys(iframeWidth).find(el => el===value)) {
                if (value in iframeWidth) {
                  setDisplayMode(value as IFrameWidthKeys);
                }
              }}
            >
              <MenuItem value="computer">Computer</MenuItem>
              <MenuItem value="phone">Phone</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box display="flex">
          <PreviewIfame
            {...props}
            style={{ width: iframeWidth[displayMode] }}
            ref={setContentRef}
          >
            {mountNode != null
              ? createPortal(
                  <CacheProvider value={cache}>
                    <script
                      src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"
                      defer
                    ></script>

                    <CssBaseline />
                    {children}
                  </CacheProvider>,
                  mountNode
                )
              : null}
          </PreviewIfame>
        </Box>
      </Stack>
    </>
  );
};

export default IFrame;

// reference:
// https://stackoverflow.com/questions/70470061/how-to-use-material-ui-mui-5-0-inside-an-iframe
// https://codesandbox.io/s/react-iframe-examples-36k1x?fontsize=14&hidenavigation=1&theme=dark&file=/src/examples/with-styled-components.js
