import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import React from 'react';

const LandingPage = () => {
  return (
    <div>
      <div className='w-[95%] m-auto'>
        <div className="bg-[url('/landingBg.png')] h-[717px] bg-no-repeat bg-cover grid grid-cols-3">
          <div className='col-span-2 pt-6 px-6 w-[80%] my-24 mx-auto text-white flex flex-col gap-6'>
            <h1 className='text-4xl font-bold '>
              Work From Anywhere, Grow Everywhere. Get Your Instant Virtual
              Office
            </h1>
            <p className='font-medium pr-20 text-base'>
              To Provide Business solutions to the "entrepreneurs, by shifting
              their conventional" mindset and enabling them to scale business
              without incurring bad cost . Join us to unlock your virtual office
              and empower your business!
            </p>
            <div className='flex justify-between items-end text-xl font-medium h-full'>
              <div className='flex items-center  gap-2 '>
                <img src='/icons/tick.png' alt='tick' />
                <span>Unleash Flexibility</span>
              </div>
              <div className='flex items-center gap-2'>
                <img src='/icons/tick.png' alt='tick' />
                <span>Simplify Operations</span>
              </div>
              <div className='flex items-center  gap-2'>
                <img src='/icons/tick.png' alt='tick' />
                <span>Boost Credibility</span>
              </div>
            </div>
          </div>
          <div className='col-span-1'>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className='font-sans bg-gray-50 text-gray-900'>
        <main className='p-6'>
          <Testimonials />
          <FAQ />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
