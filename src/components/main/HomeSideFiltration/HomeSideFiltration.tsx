'use client';

import { Checkbox } from '@/components/ui/Checkbox/Checkbox';
import { Container } from '@/components/ui/Container/Container';
import { Input } from '@/components/ui/Input/Input';
import { VStack } from '@/components/ui/Stack';
import React, { useState } from 'react';
import cls from './HomeSideFiltration.module.scss';
import { Title } from '@/components/ui/Title/Title';

const ingredients = ['cheese', 'mozarella', 'garlic', 'onion', 'tomatos'];

export function HomeSideFiltration() {
  const [val, setVal] = useState('');

  return (
    <div className={cls.filters}>
      {/* TOP FILTERS */}
      <VStack className={cls.bottomDistance}>
        <Checkbox value label="can choose" onChange={(val) => {}} />
        <Checkbox value label="new" onChange={(val) => {}} />
      </VStack>

      {/* PRICES FILTER */}
      <VStack className={cls.bottomDistance}>
        <Input type="number" min="0" max="100" value={val} label="price from" minWidth onChange={setVal} />
        <Input type="number" min="0" max="100" value={val} label="price to" minWidth onChange={setVal} />
      </VStack>

      {/* INGREDIENTS FILTERS*/}
      <VStack>
        <Title title="Ingredients" type="h3" />
        {ingredients.map((ingr) => (
          <Checkbox key={ingr} value={true} label={ingr} onChange={(val) => console.log(val)} />
        ))}
      </VStack>
    </div>
  );
}
