import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ['', '/wishes', '/showcase', '/process', '/prizes', '/submit', '/partners'];
  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
