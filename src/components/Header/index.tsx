import React from 'react';

import Logo from 'components/basic/Logo';

import s from './Header.module.scss';

export default function Header(): JSX.Element {
  return (
    <div className={s.wrapper}>
      <Logo />
    </div>
  );
}
