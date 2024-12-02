import HomeSection from '@/src/components/sections/HomeSection';
import { generateMetadata as getPageMetadata } from '@/src/components/utils/generateMetadata';

export async function generateMetadata() {
  return getPageMetadata({
    title: '',
    path: '/'
  });
}

const HomePage = () => <HomeSection />;

export default HomePage;
