import React, { type PropsWithChildren } from 'react';

import { Footer } from './components/footer';
import { Header } from './components/header';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
