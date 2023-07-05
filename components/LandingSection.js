import style from './styles/landing-section.module.scss';
import Image from 'next/image';
import arrowDown from '../public/arrow-down.svg';

export default function LandingSection() {
  return (
    <section className={`${style.landing_section} scroll-area `}>
      <div className={`${style.main} main-content`}>
        <div>
          <h1 className='text-my-grey-0'>Peter Abu-Ekpeshie</h1>
          <h2 className='text-my-grey-1'>
            Product designer living in London, United Kingdom.
          </h2>
          <a href='#highlighted-experience' className={style.button}>
            <span> Selected Work</span>
            <Image src={arrowDown} alt='' srcSet='' />
          </a>
        </div>
        <div></div>
      </div>
    </section>
  );
}
