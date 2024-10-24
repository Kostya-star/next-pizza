import { classNames } from '@/util/classNames';
import cls from './Title.module.scss';

type TitleAlign = 'left' | 'right' | 'center';

type TitleType = 'h1' | 'h2' | 'h3';

interface TextProps {
  title: string;
  className?: string;
  align?: TitleAlign;
  type?: TitleType;
}

export const Title = ({ className, title, align = 'left', type = 'h1' }: TextProps) => {
  const Title = type;
  return (
    <div className={classNames('', {}, [className, cls[align], cls[type]])}>
      <Title>{title}</Title>
    </div>
  );
};
