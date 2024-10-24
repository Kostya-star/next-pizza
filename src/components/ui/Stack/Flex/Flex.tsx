import { classNames } from '@/util/classNames';
import cls from './Flex.module.scss';
import { ReactNode, useMemo } from 'react';

type JustifyContent = 'start' | 'center' | 'end' | 'between' | 'around';
type AlignItems = 'start' | 'center' | 'end' | 'normal';
type FlexDirection = 'row' | 'column';
type FlexGap = '2' | '4' | '8' | '16' | '32';

export interface FlexProps {
  className?: string;
  children?: ReactNode;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  flexDirection?: FlexDirection;
  gap?: FlexGap;
  allWidth?: boolean;
  tag?: keyof HTMLElementTagNameMap;
}

const justifyContentConst: Record<JustifyContent, string> = {
  start: cls.justifyContentStart,
  center: cls.justifyContentCenter,
  end: cls.justifyContentEnd,
  between: cls.justifyContentBetween,
  around: cls.justifyContentAround,
};

const alignItemsConst: Record<AlignItems, string> = {
  start: cls.alignItemsStart,
  center: cls.alignItemsCenter,
  end: cls.alignItemsEnd,
  normal: cls.alignItemsNormal,
};

const flexDirectionConst: Record<FlexDirection, string> = {
  row: cls.flexDirectionRow,
  column: cls.flexDirectionColumn,
};

const flexGapConst: Record<FlexGap, string> = {
  2: cls.gap2,
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32,
};

export const Flex = (props: FlexProps) => {
  const { className, children, justifyContent = 'start', alignItems = 'start', flexDirection = 'row', gap, allWidth, tag = 'div' } = props;

  const classNamesArr = [
    className,
    justifyContentConst[justifyContent],
    alignItemsConst[alignItems],
    flexDirectionConst[flexDirection],
    gap && flexGapConst[gap],
  ];

  const mods = {
    [cls.allWidth]: allWidth,
  };

  const Tag = tag;

  return <Tag className={classNames(cls.Flex, mods, classNamesArr)}>{children}</Tag>;
};
