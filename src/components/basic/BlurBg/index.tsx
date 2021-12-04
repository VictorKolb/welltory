import React from 'react';

import s from './BlurBg.module.scss';

export default function BlurBg() {
  return (
    <div className={s.wrapper}>
      <div className={s.red} />
      <div className={s.blue} />
      <div className={s.green} />
    </div>
  );
}
