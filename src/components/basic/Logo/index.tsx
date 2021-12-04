import React from 'react';

import s from './Logo.module.scss';

export default function Logo() {
  return (
    <a href="https://welltory.com/" className={s.wrapper}>
      <img className={s.logoImg} src="img/logo.jpg" alt="" />
      <img className={s.logoText} src="img/logo-text.svg" alt="" />
    </a>
  );
}
