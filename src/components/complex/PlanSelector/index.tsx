import React, { useState } from 'react';

import Plan from 'components/basic/Plan';

import s from './PlanSelector.module.scss';

export default function PlanSelector() {
  const [selectedTariff, setSelectedTariff] = useState<'monthly' | 'annual'>(
    'annual',
  );

  return (
    <div className={s.wrapper}>
      <Plan
        name="Monthly"
        discount={15}
        cost={5.99}
        costWithoutDiscount={7.99}
        period="Billed every month"
        discountBackground="#89A3FF"
        isActive={selectedTariff === 'monthly'}
        onClick={() => {
          setSelectedTariff('monthly');
        }}
      />
      <Plan
        name="Annual"
        discount={25}
        cost={4.59}
        costWithoutDiscount={7.99}
        period="$79 billed once a year"
        discountBackground="#EFDD36"
        isActive={selectedTariff === 'annual'}
        onClick={() => {
          setSelectedTariff('annual');
        }}
      />
    </div>
  );
}
