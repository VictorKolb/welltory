import cn from 'classnames';
import React from 'react';

import {
  feelBetter,
  healthInsights,
} from 'components/complex/PlanTable/constants';

import s from './PlanTable.module.scss';

function Col(el: typeof feelBetter[0]) {
  return (
    <div key={el.id} className={s.row}>
      <div>
        <div>{el.text}</div>
      </div>
      <div className={s.col}>
        <img src={`img/${el.free ? 'check' : 'minus'}-icon.svg`} alt="" />
      </div>
      <div className={s.col}>
        <img src={`img/${el.pro ? 'check' : 'minus'}-icon.svg`} alt="" />
      </div>
    </div>
  );
}

export default function PlanTable() {
  const feelBetterRows = feelBetter.map(el => {
    return <Col key={el.id} {...el} />;
  });
  const healthInsightsRows = healthInsights.map(el => {
    return <Col key={el.id} {...el} />;
  });

  return (
    <div className={s.wrapper}>
      <h2 className="h2">Choose the best plan for you</h2>

      <div className={cn(s.row, s.tableHeader)}>
        <div className={s.col}>
          <h2 className={cn('h2', s.h2, s.tableHeaderFirst)}>What you get</h2>
        </div>
        <div className={s.col}>
          <h2 className={cn('h2', s.h2)}>for free</h2>
        </div>

        <div className={s.col}>
          <h3 className={cn('h3', s.h3)}>in Pro</h3>
        </div>
      </div>
      <h3 className="h3">Feel better fast</h3>
      <div>{feelBetterRows}</div>

      <h3 className="h3">Gain rich health insights</h3>
      <div>{healthInsightsRows}</div>
    </div>
  );
}
