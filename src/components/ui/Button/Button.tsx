import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';
import { classNames } from '@/util/classNames';

type ButtonTheme = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  outlined?: boolean;
}

export function Button({ children, theme = 'primary', outlined, className, ...rest }: ButtonProps) {
  return <button 
      className={classNames(cls.button, { [cls.outlined]: outlined }, [cls[theme], className])}
      {...rest}
      >
      {children}
      </button>;
}
