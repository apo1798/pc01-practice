import { Fragment, type ReactNode } from 'react';
import dynamic from 'next/dynamic';

type Props = {
  children: ReactNode;
};

const NoSsr = ({ children }: Props) => <Fragment>{children}</Fragment>;

export default dynamic(async () => await Promise.resolve(NoSsr), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

// https://stackoverflow.com/questions/53139884/next-js-disable-server-side-rendering-on-some-pages
