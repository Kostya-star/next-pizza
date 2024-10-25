import { classNames } from '@/util/classNames';
import cls from './ProductsList.module.scss';
import { IProductItem } from '@/types/ProductItem';
import { ProductItem } from '../ProductItem/ProductItem';
import { Title } from '@/components/ui/Title/Title';
import { VStack } from '@/components/ui/Stack';

interface ProductsListProps {
  className?: string;
  products: IProductItem[];
  title: string;
}

export const ProductsList = ({ className, products, title }: ProductsListProps) => {
  return (
    <VStack gap='16' className={classNames(cls.ProductsList, {}, [className])}>
      <Title title={title}/>
      <div className={classNames(cls.ProductsListItems, {}, [className])}>
        {products.map((product, ind) => (
          <div key={ind}>
            <ProductItem
              title={product.title}
              imageSrc={product.imageSrc}
              productId={product.productId}
              description={product.description}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </VStack>
  );
};
