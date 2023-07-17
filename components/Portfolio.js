import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import globe from '../public/globe.svg';
import phone from '../public/phone.svg';
import arrowRight from '../public/arrow-right.svg';
import parse from 'html-react-parser';
import style from './styles/portfolio-preview.module.scss';
import { useAnimate, stagger } from 'framer-motion';
import useIntersectionObserver from '@/lib/useIntersectionObserver';
import Link from 'next/link';

export default function Portfolio({ content }) {
  const portfolioParent = useRef(null);
  const { isVisible } = useIntersectionObserver({
    ref: portfolioParent,
    threshold: 0.4,
    rootMargin: '0px',
  });

  const scope = useAnimatePortfolio(isVisible);
  return (
    <div ref={portfolioParent} className={style.project}>
      <div ref={scope} className={style.project_text_content}>
        <h2 className='animate-portfolio-title'>{parse(content.title)}</h2>
        <div className='flex flex-wrap'>
          <div className={`${style.platform} animate-pebble sm:mb-4 `}>
            <Image
              alt='platform-icon'
              src={content.platform === 'app' ? phone : globe}
            />
          </div>
          {content.roles.map((x = {}, idx) => (
            <div
              className={`${style.pebble} ${
                x.title === 'Sole Designer'
                  ? 'bg-my-orange text-my-grey-0'
                  : x.title === 'Co-Designer'
                  ? 'bg-my-lemon text-my-grey-0'
                  : 'bg-my-bg-color-1 text-my-grey-1'
              } animate-pebble`}
              key={idx}>
              {x.title}
            </div>
          ))}
        </div>
        <Link
          href='/project'
          className='case-study-link animate-portfolio-link'>
          <span>Case Study</span> <Image alt='link icon' src={arrowRight} />
        </Link>
      </div>
      <div className={`${style.image_container} image-container`}>
        <Image
          className='image'
          fill={true}
          src={content.portfolioImage.image.data.attributes.formats}
          alt=''
        />
      </div>
    </div>
  );
}

function useAnimatePortfolio(isVisible) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const titleAnimation = [
      [
        '.animate-portfolio-title',
        isVisible && { opacity: 1, filter: 'blur(0px)' },
        { duration: 0.4 },
      ],
    ];
    const pebbleAnimations = [
      [
        '.animate-pebble',
        isVisible && { opacity: 1, transform: 'translateX(0%)' },
        { duration: 0.4, delay: stagger(0.1) },
      ],
    ];
    const linkAnimation = [
      [
        '.animate-portfolio-link',
        isVisible && { opacity: 1, transform: 'translateX(0%)' },
        { duration: 0.2 },
      ],
    ];
    animate([...titleAnimation, ...pebbleAnimations, ...linkAnimation]);
  }, [isVisible]);
  return scope;
}
