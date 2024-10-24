import { classNames } from '@/util/classNames';
import React, { ChangeEvent, HTMLAttributes } from 'react';
import cls from './Checkbox.module.scss';

interface CheckboxProps extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
  className?: string;
  label?: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export function Checkbox({ className, label, value, onChange, ...props }: CheckboxProps) {
  const onCheckboxCheck = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };
  return (
    <div className={classNames(cls.checkbox, null, [className])}>
      {label ? (
        <label className={cls.label}>
          <input type="checkbox" checked={value} onChange={onCheckboxCheck} {...props} />
          {label}
        </label>
      ) : (
        <input type="checkbox" checked={value} onChange={onCheckboxCheck} {...props} />
      )}
    </div>
  );
}
