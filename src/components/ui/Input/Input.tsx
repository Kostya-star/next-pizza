import { classNames } from '@/util/classNames';
import React, { ChangeEvent, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import cls from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  className?: string;
  label?: string;
  value: string;
  type?: HTMLInputTypeAttribute;
  minWidth?: boolean;
  onChange: (value: string) => void;
}

export function Input({ className, label, value, type = 'text', minWidth, onChange, ...props }: InputProps) {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={classNames(cls.inputComp, null, [className])}>
      {label ? (
        <label className={cls.label}>
          {label}
          <input type={type} value={value} className={classNames(cls.input, { [cls.minWidth]: minWidth }, [className])} onChange={onInputChange} {...props} />
        </label>
      ) : (
        <input type={type} value={value} className={classNames(cls.input, { [cls.minWidth]: minWidth }, [className])} onChange={onInputChange} {...props} />
      )}
    </div>
  );
}
