import React from 'react';
import Navbar from '@/components/homePage/Navbar';
import MainHome from '@/components/homePage/MainHome';
import CardSolutions from '@/components/homePage/CardSolutions';
import FlexibleWorkspace from '@/components/homePage/FlexibleWorkspace';
import Discover from '@/components/homePage/Discover';
import Virtual from '@/components/homePage/Virtual';
import TrustedBy from '@/components/homePage/TrustedBy';
import TestimonialsClient from '@/components/homePage/TestimonialsClient';
import LowerFooter from '@/components/homePage/LowerFooter';
import { Stats } from '@/components/homePage/Stats';
import { Faq } from '@/components/homePage/Faq';

const cardSolutionItems = [
  {
    img: '/icons/solution1.png',
    head: 'Our solutions',
    desc: 'Browse our full range of products and services',
  },
  {
    img: '/icons/solution2.png',
    head: 'Talk to us',
    desc: 'Get advice from one of our experts 24/7',
  },
  {
    img: '/icons/solution3.png',
    head: 'Book workspace',
    desc: 'Book meeting rooms and day offices now',
  },
  {
    img: '/icons/solution4.png',
    head: 'Set up a virtual office',
    desc: 'Start building a real presence today',
  },
  {
    img: '/icons/solution5.png',
    head: 'Buy a Membership',
    desc: 'Access thousands of locations on demand',
  },
  {
    img: '/icons/solution6.png',
    head: 'Explore our app',
    desc: 'Download our app and get started today',
  },
];

const Homepage = () => {
  return (
    <main>
      <Navbar />
      <div className='flex flex-col gap-8'>
        <MainHome />
        <section className='grid grid-cols-4 gap-4 mt-10 w-[85%] mx-auto'>
          {cardSolutionItems.map((item, index) => (
            <CardSolutions
              key={index}
              img={item.img}
              head={item.head}
              desc={item.desc}
            />
          ))}
        </section>
        <section className='bg-[#F5F5F5] pb-8'>
          <FlexibleWorkspace />
        </section>
        <Discover />
        <section className='bg-[#F5F5F5]'>
          <Virtual />
        </section>
        <TrustedBy />
        <section className='bg-[#F5F5F5]'>
          <TestimonialsClient />
        </section>
        <section>
          <Stats />
        </section>
        <section>
          <Faq />
        </section>
        <LowerFooter />
      </div>
    </main>
  );
};

export default Homepage;
