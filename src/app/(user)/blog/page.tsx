import BlogSection from '@/src/components/sections/BlogSection';
import { generateMetadata as getPageMetadata } from '@/src/components/utils/generateMetadata';

export async function generateMetadata() {
  return getPageMetadata({
    title: 'Blog',
    description: 'Read the latest articles and updates on my portfolio blog.',
    path: '/blog'
  });
}

const Blog = () => <BlogSection />;

export default Blog;
