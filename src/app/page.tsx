import { HomeHeader } from '@/components/main/HomeHeader/HomeHeader';
import { HomeSideFiltration } from '@/components/main/HomeSideFiltration/HomeSideFiltration';

export default function Home() {
  return (
    <div style={{ height: '1000px' }}>
      <HomeHeader />
      <HomeSideFiltration />
    </div>
  );
}
