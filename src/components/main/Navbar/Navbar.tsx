import Image from 'next/image';
import cls from './Navbar.module.scss';
import { Button } from '@/components/ui/Button/Button';
import { ShoppingCart, User } from 'lucide-react';
import { HStack } from '@/components/ui/Stack';
import { Container } from '@/components/ui/Container/Container';

export function Navbar() {
  return (
    <Container>
      <nav className={cls.nav}>
        <div className={cls.header}>
          <Image src="/logo.png" width={30} height={30} alt="logo" />
          <div>
            <h1 className={cls.title}>Next pizza</h1>
            <span>very delicious</span>
          </div>
        </div>

        <div className={cls.btnActions}>
          <Button theme="secondary" outlined>
            <HStack alignItems="center" gap="4">
              <User />
              <span>Log in</span>
            </HStack>
          </Button>
          <Button theme="secondary" outlined>
            <HStack alignItems="center" gap="4">
              <span>234$</span>
              |
              <ShoppingCart />
            </HStack>
          </Button>
        </div>
      </nav>
    </Container>
  );
}
