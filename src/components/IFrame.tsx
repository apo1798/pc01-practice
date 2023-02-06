import { useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { CssBaseline } from '@mui/material';
import styled from '@emotion/styled';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

type Props = {
  children: ReactNode;
};

const PreviewIfame = styled('iframe')(() => ({
  minHeight: '80vh',
  height: '100%',
  width: '100%',
  border: '3px solid #888',
  borderRadius: '0.7rem'
}));

const IFrame = ({ children, ...props }: Props) => {
  const [contentRef, setContentRef] = useState<any>(null);
  // const contentRef = useRef<HTMLIFrameElement>(null);
  const mountNode = contentRef?.contentWindow?.document?.body;

  const cache = createCache({
    key: 'iframe-css',
    container: contentRef?.contentWindow?.document?.head
    // prepend: true
  });

  return (
    <PreviewIfame {...props} ref={setContentRef}>
      {mountNode != null
        ? createPortal(
            <CacheProvider value={cache}>
              <CssBaseline />
              {children}
            </CacheProvider>,
            mountNode
          )
        : null}
    </PreviewIfame>
  );
};

export default IFrame;

// reference:
// https://stackoverflow.com/questions/70470061/how-to-use-material-ui-mui-5-0-inside-an-iframe
// https://codesandbox.io/s/react-iframe-examples-36k1x?fontsize=14&hidenavigation=1&theme=dark&file=/src/examples/with-styled-components.js
