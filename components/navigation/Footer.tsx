import { FooterLogo } from '@/assets/brand/FooterLogo';

export const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row gap-6 w-full items-center justify-center py-12 border-t md:gap-32'>
      <FooterLogo />
      <span className='flex flex-col gap-2 items-center justify-center md:items-start'>
        <a href='#' className='underline font-medium'>
          Cookies policy
        </a>
        <a href='#' className='underline font-medium'>
          Policy of privacy
        </a>
        <a href='#' className='underline font-medium'>
          Contact
        </a>
      </span>
    </footer>
  );
};
