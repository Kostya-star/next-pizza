import { ReactNode } from 'react';
import cls from './Tabs.module.scss';
import { classNames } from '@/util/classNames';
import { Button } from '../Button/Button';

interface TabItem {
  value: ReactNode;
  text: string;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tabVal: string) => void;
}

export const Tabs = ({ className, tabs, value, onTabClick }: TabsProps) => {
  const onClick = (newTab: TabItem) => () => {
    onTabClick(newTab.text);
  };

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => {
        const isActive = tab.text === value;
        return (
          <div key={tab.text} onClick={onClick(tab)} className={classNames(cls.tab, { [cls.active]: isActive }, [])}>
            {tab.text}
          </div>
          // <Button key={tab.text} outlined className={classNames(cls.tab, { [cls.active]: isActive }, [])} onClick={onClick(tab)}>
          //   {tab.text}
          // </Button>
        );
      })}
    </div>
  );
};
