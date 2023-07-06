import { useState } from 'react';
import style from './styles/landing-section.module.scss';
import Image from 'next/image';
import arrowDown from '../public/arrow-down.svg';
import useStaggerAnimation from '@/lib/useStaggerAnimation';

export default function LandingSection() {
  const [animateIt] = useState(true);
  const scope = useStaggerAnimation(animateIt);

  return (
    <section ref={scope} className={`${style.landing_section} scroll-area `}>
      <div className={`${style.main} main-content`}>
        <div>
          <h1 className='text-my-grey-0 animate-stagger'>Peter Abu-Ekpeshie</h1>
          <h2 className='text-my-grey-1 animate-stagger'>
            Product designer living in London, United Kingdom.
          </h2>
          <a
            href='#selected-work'
            className={`${style.button} animate-stagger`}>
            <span> Selected Work</span>
            <Image src={arrowDown} alt='' srcSet='' />
          </a>
        </div>
        <div></div>
      </div>
    </section>
  );
}
