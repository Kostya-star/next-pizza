import { classNames } from '@/util/classNames';
import cls from './ProductItem.module.scss';
import Link from 'next/link';
import { HStack, VStack } from '@/components/ui/Stack';
import Image from 'next/image';
import { Title } from '@/components/ui/Title/Title';
import { Minus, Plus } from 'lucide-react';
import { IProductItem } from '@/types/ProductItem';
import { Button } from '@/components/ui/Button/Button';

type ProductItemProps = IProductItem;

export const ProductItem = ({ className, imageSrc, productId, title, description, price }: ProductItemProps) => {
  return (
    <VStack className={classNames(cls.ProductItem, {}, [className])}>
      <Link href={`/products/${productId}`} className={cls.ProductItem}>
        <Image src={imageSrc} width={100} height={100} alt="pizza img" />
      </Link>
      <Title title={title} />
      <p>{description}</p>

      <HStack alignItems='center' justifyContent='between' allWidth>
        <span>{price} $</span>
        <HStack alignItems='center' gap='8'>
          <Button outlined>
            <Minus/>
          </Button>
          0
          <Button outlined>
            <Plus/>
          </Button>
        </HStack>
      </HStack>
    </VStack>
  );
};
