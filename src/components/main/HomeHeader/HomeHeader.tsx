import { Categories } from '@/components/main/Categories/Categories';
import { HStack } from '@/components/ui/Stack';
import { Title } from '@/components/ui/Title/Title';
import cls from './HomeHeader.module.scss';
import { Container } from '@/components/ui/Container/Container';

export function HomeHeader() {
  return (
    <>
      <Container>
        <Title title="All pizzas" type="h2" />
      </Container>
      <div className={cls.topBar}>
        <Container>
          <HStack justifyContent="between" alignItems="center">
            <Categories />
            <div>SORTING</div>
          </HStack>
        </Container>
      </div>
    </>
  );
}
