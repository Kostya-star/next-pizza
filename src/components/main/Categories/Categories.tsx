'use client';

import { Tabs } from '@/components/ui/Tabs/Tabs';
import React, { ReactNode, useState } from 'react';

const tabs = [
  {
    text: 'tab1',
    value: 'tab1',
  },
  {
    text: 'tab2',
    value: 'tab2',
  },
  {
    text: 'tab3',
    value: 'tab3',
  },
];

export function Categories() {
  const [tab, setTab] = useState('tab1');

  return <Tabs tabs={tabs} value={tab} onTabClick={setTab} />;
}
