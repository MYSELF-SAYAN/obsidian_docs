import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()} sidebar={{
      tabs: [
        {
          title: 'SDK',
          url: '/docs', // Links to content/docs/guide/index.mdx
        },
        {
          title: 'API Reference',
          url: '/docs/api',   // Links to content/docs/api/index.mdx
        }
      ]
    }}>
      {children}
    </DocsLayout>
  );
}
