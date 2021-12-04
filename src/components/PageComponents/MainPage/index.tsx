import cn from 'classnames';
import React from 'react';

import Button from 'components/basic/Button';
import PlanSelector from 'components/complex/PlanSelector';
import PlanTable from 'components/complex/PlanTable';

import s from './MainPage.module.scss';

export default function MainPage() {
  return (
    <>
      <img className={s.proLogo} src="img/weltory-pro.jpg" alt="" />
      <h1 className={cn('h1', s.h1)}>Take better care of yourself every day</h1>
      <PlanSelector />
      <div className={s.continueButtonWrapper}>
        <Button>continue</Button>
        <div className={s.continueButtonDesc}>
          No commitments. Cancel anytime
        </div>
      </div>
      <PlanTable />
      <div className={s.chooseButtonWrapper}>
        <Button look="secondary">go with the free version</Button>
        <Button>upgrade now</Button>
      </div>
    </>
  );
}
