import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Wishes } from '@/components/Wishes';
import { Process } from '@/components/Process';
import { Rewards } from '@/components/Rewards';
import { FAQ } from '@/components/FAQ';
import { SponsorStrip } from '@/components/SponsorStrip';
import { CTA } from '@/components/CTA';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: '/' },
};

const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: SITE.shortTitle,
  alternateName: SITE.slogan,
  description: SITE.description,
  eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  startDate: '2026-06-18T00:00+08:00',
  endDate: '2026-07-12T23:59+08:00',
  location: [
    {
      '@type': 'VirtualLocation',
      name: '魔搭 ModelScope 社区',
      url: 'https://modelscope.cn/',
    },
    {
      '@type': 'Place',
      name: 'WAIC 2026 上海（赛果展示）',
      address: {
        '@type': 'PostalAddress',
        addressLocality: '上海',
        addressCountry: 'CN',
      },
    },
  ],
  organizer: [
    {
      '@type': 'Organization',
      name: SITE.hosts.main,
    },
    {
      '@type': 'Organization',
      name: SITE.hosts.coHost,
      url: 'https://modelscope.cn/',
    },
  ],
  sponsor: [
    { '@type': 'Organization', name: SITE.hosts.partner },
    { '@type': 'Organization', name: SITE.hosts.llmSponsor },
  ],
  image: [`${SITE.url}${SITE.ogImage}`, `${SITE.url}${SITE.bannerImage}`],
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'CNY',
    availability: 'https://schema.org/InStock',
    url: SITE.registerUrl,
    validFrom: '2026-06-18T00:00+08:00',
  },
  inLanguage: 'zh-CN',
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <Hero />
      <Features />
      <Wishes />
      <Process />
      <Rewards />
      <FAQ />
      <SponsorStrip />
      <CTA />
    </>
  );
}
