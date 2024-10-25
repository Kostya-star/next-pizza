import { HomeHeader } from '@/components/main/HomeHeader/HomeHeader';
import { HomeSideFiltration } from '@/components/main/HomeSideFiltration/HomeSideFiltration';
import cls from './page.module.scss';
import { Container } from '@/components/ui/Container/Container';
import { HStack } from '@/components/ui/Stack';
import { ProductItem } from '@/components/main/ProductItem/ProductItem';
import { ProductsList } from '@/components/main/ProductsList/ProductsList';
import { IProductItem } from '@/types/ProductItem';

const product: IProductItem = {
  imageSrc: 'https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067',
  productId: '1',
  title: 'Pizzzaaaa',
  description: 'some pizza description should be here lol keke cheburek',
  price: 10,
};

export default function Home() {
  return (
    <div style={{ height: '1000px' }}>
      <HomeHeader />

      <Container className={cls.contentWrapper}>
        <div className={cls.content}>
          <HomeSideFiltration />
          <ProductsList title="Pizzas List" products={Array.from({ length: 10 }, (_, index) => (product))} />
        </div>
      </Container>
    </div>
  );
}
