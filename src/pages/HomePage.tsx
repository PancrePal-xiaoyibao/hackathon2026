import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Wishes } from '../components/Wishes';
import { Process } from '../components/Process';
import { Rewards } from '../components/Rewards';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Wishes />
      <Process />
      <Rewards />
      <FAQ />
      <CTA />
    </>
  );
};
