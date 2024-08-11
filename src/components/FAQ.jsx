'use client';
import { useState } from 'react';

const questions = [
  {
    question: 'How can a virtual office benefit my business in India?',
    answer:
      'A virtual office allows you to have an office space without physically owning or paying for one. It is a cost-effective solution for those looking to rent an office space to start/expand their business in a new city, running a remote business, manage stocks and supply in different states across India.',
  },
  {
    question: 'How can a virtual office benefit my business in India?',
    answer:
      'A virtual office allows you to have an office space without physically owning or paying for one. It is a cost-effective solution for those looking to rent an office space to start/expand their business in a new city, running a remote business, manage stocks and supply in different states across India.',
  },
  {
    question: 'How can a virtual office benefit my business in India?',
    answer:
      'A virtual office allows you to have an office space without physically owning or paying for one. It is a cost-effective solution for those looking to rent an office space to start/expand their business in a new city, running a remote business, manage stocks and supply in different states across India.',
  },
  {
    question: 'How can a virtual office benefit my business in India?',
    answer:
      'A virtual office allows you to have an office space without physically owning or paying for one. It is a cost-effective solution for those looking to rent an office space to start/expand their business in a new city, running a remote business, manage stocks and supply in different states across India.',
  },
  {
    question: 'How can a virtual office benefit my business in India?',
    answer:
      'A virtual office allows you to have an office space without physically owning or paying for one. It is a cost-effective solution for those looking to rent an office space to start/expand their business in a new city, running a remote business, manage stocks and supply in different states across India.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className='py-12 bg-white'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-weight-500 mb-10'>
          Frequently Asked Questions
        </h2>
        <div className='w-[90%] mx-auto'>
          {questions.map((item, index) => (
            <div key={index} className='border-b border-gray-300'>
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className='w-full text-left py-4 px-6 text-[20px] font-normal flex justify-between items-center'
              >
                {item.question}
                <span
                  className={`transition-transform ${
                    open === index ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M19 9l-7 7-7-7'
                    ></path>
                  </svg>
                </span>
              </button>
              {open === index && (
                <div className='py-4 px-6 font-normal text-left text-[16px] text-gray-700'>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
