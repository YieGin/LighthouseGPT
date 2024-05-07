import Image from 'next/image';
import React from 'react';

interface IconContainerProps {
  iconSrc: string;
  alt: string;
}

const Navbar: React.FC = () => {
  return (
    <header className='bg-white px-[41px] flex items-center h-[101px] justify-between w-full'>
      <h2 className='text-[#343C6A] font-semibold text-[28px]'>Free-LighthouseGPT</h2>
      <div className='md:flex hidden gap-[30px]'>
        <IconContainer iconSrc="/icons/settings.svg" alt='settings icon' />
        <IconContainer iconSrc="/icons/notification.svg" alt='notification icon' />
        <Image
          className='object-cover rounded-full cursor-pointer'
          width={60}
          height={60}
          src="/images/profile.png"
          alt="Profile"
        />
      </div>
    </header>
  );
};

const IconContainer = ({ iconSrc, alt }: IconContainerProps) => (
  <div className='rounded-full w-[50px] h-[50px] bg-[#F5F7FA] flex items-center justify-center cursor-pointer'>
    <Image width={25} height={25} src={iconSrc} alt={alt} />
  </div>
);

export default Navbar;
