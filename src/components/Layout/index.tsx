import React from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';
import { HtmlHead } from 'components/HtmlHead';

import s from './Layout.module.scss';

interface Props {
  children: any;
  withoutHeader?: boolean;
  withoutFooter?: boolean;
  ldJSON?: Record<string, any>;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  withoutHeader,
  withoutFooter,
  ldJSON,
  title,
  description,
}: Props): JSX.Element {
  return (
    <div className={s.layout}>
      {!withoutHeader && <Header />}

      <HtmlHead ldJSON={ldJSON} title={title} description={description} />
      <div>{children}</div>
      {!withoutFooter && <Footer />}
    </div>
  );
}
