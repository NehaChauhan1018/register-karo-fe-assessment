'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Dabur from '@/assets/Dabur.png';
import Image from 'next/image';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, height: '56px', width: '56px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, height: '56px', width: '56px' }}
      onClick={onClick}
    />
  );
}

const testimonials = [
  {
    name: 'John Doe',
    text: 'The LaunchWise team is very professional and 100% transparent. We would surely recommend them to everyone who wants to have a new business setup or those who already have a company. Their experts are thorough with all corners of business. They have surely earned us as their permanent client.',
  },
  {
    name: 'John Doe',
    text: 'The LaunchWise team is very professional and 100% transparent. We would surely recommend them to everyone who wants to have a new business setup or those who already have a company. Their experts are thorough with all corners of business. They have surely earned us as their permanent client.',
  },
  {
    name: 'John Doe',
    text: 'The LaunchWise team is very professional and 100% transparent. We would surely recommend them to everyone who wants to have a new business setup or those who already have a company. Their experts are thorough with all corners of business. They have surely earned us as their permanent client.',
  },
];

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className='py-12 bg-gray-100'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl font-bold mb-16'>
          CLIENT <span className='text-primary'>TESTIMONIAL</span>
        </h2>
        <Slider {...settings} className='mx-auto max-w-4xl'>
          {testimonials.map((testimonial, index) => {
            return (
              <div key={index} className='!flex gap-12 p-6'>
                <Image className='flex-1 h-[200px] width-[200px]' src={Dabur} />
                <div className='text-left'>
                  <p className='text-lg mb-4'>"{testimonial.text}"</p>
                  <p className='font-semibold'>— {testimonial.name}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
