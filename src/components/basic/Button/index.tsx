import cn from 'classnames';
import type { ReactElement } from 'react';
import React from 'react';

import s from './Button.module.scss';

interface Props {
  buttonSize?: 'small' | 'medium' | 'large';
  children: ReactElement | string;
  look?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  href?: string;
  isDisabled?: boolean;
  className?: string;
}

export default function Button({
  look = 'primary',
  buttonSize = 'large',
  isDisabled,
  ...props
}: Props): JSX.Element {
  const { className, ...restProps } = props;
  return (
    <button
      disabled={isDisabled}
      className={cn(s.button, s[look], className, {
        [s.buttonLarge]: buttonSize === 'large',
        [s.buttonMedium]: buttonSize === 'medium',
        [s.buttonSmall]: buttonSize === 'small',
      })}
      {...restProps}
    >
      {props.children}
    </button>
  );
}
