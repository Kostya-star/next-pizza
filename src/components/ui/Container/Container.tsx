import { classNames } from '@/util/classNames';
import cls from './Container.module.scss';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return <div className={classNames(cls.container, null, [className])}>{children}</div>;
}
