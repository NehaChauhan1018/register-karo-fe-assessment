import Image from 'next/image';
import StatsImage from '@/assets/statistic.png';
import RightChevron from '@/assets/RightChevron.png';

export const Stats = () => (
  <div className='flex flex-wrap gap-12 items-center justify-center my-10'>
    <Image src={StatsImage} />
    <div className='w-1/3'>
      <p className='text-4xl mb-4'>Why Opt for Launchwise?</p>
      <p className='text-[16px] text-[#393939] mb-10'>
        Delegate workspace customization and management to us, allowing you to
        concentrate on your core business activities while we ensure your
        workspace is primed for growth.
      </p>
      <div>
        <div className='pl-6 relative'>
          <div className='w-[5px] h-full absolute left-0 bg-[#2962FF]' />
          <p className='text-[32px] text-[#393939] mb-3 font-semibold'>
            Prime Nationwide Options
          </p>
          <p className='text-[16px] text-[#393939]'>
            Explore our diverse and unparalleled portfolio of office spaces,
            offering the finest options strategically located across the nation
          </p>
        </div>
        <div className='flex flex-col gap-2 mt-6'>
          <div className='flex gap-5 items-center justify-start'>
            <Image className='h-[10px] w-[7px]' src={RightChevron} />
            <p className='flex-1'>Comprehensive Office Solutions</p>
          </div>
          <div className='flex gap-5 items-center justify-start'>
            <Image className='h-[10px] w-[7px]' src={RightChevron} />
            <p>Strategically Located Premium Spaces</p>
          </div>
          <div className='flex gap-5 items-center justify-start'>
            <Image className='h-[10px] w-[7px]' src={RightChevron} />
            <p>Cost-Effective Solutions with Modern Amenities</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
