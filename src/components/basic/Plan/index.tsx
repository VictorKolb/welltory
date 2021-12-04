import cn from 'classnames';
import React from 'react';

import s from './Plan.module.scss';

interface Props {
  name: string;
  discount: number;
  cost: number;
  costWithoutDiscount: number;
  period: string;
  discountBackground: string;
  isActive: boolean;
  onClick: () => void;
}

export default function Plan(props: Props) {
  const {
    name,
    discount,
    discountBackground,
    cost,
    costWithoutDiscount,
    period,
    isActive,
    onClick,
  } = props;

  return (
    <div
      className={cn(s.wrapper, {
        [s.activeWrapper]: isActive,
      })}
      onClick={onClick}
    >
      <div
        className={cn(s.discountLabel, {
          [s.activeDiscountLabel]: isActive,
        })}
        style={{ '--background': discountBackground } as React.CSSProperties}
      >
        – {discount}%
      </div>
      <div className={s.headerWrapper}>
        <div className={s.name}>{name}</div>
        <div
          className={s.cost}
          style={{ '--color': discountBackground } as React.CSSProperties}
        >
          $ {cost}
          <div className={s.prevCount}>$ {costWithoutDiscount}</div>
        </div>
      </div>
      <div
        className={cn(s.period, {
          [s.activePeriod]: isActive,
        })}
      >
        {period}
      </div>
    </div>
  );
}
