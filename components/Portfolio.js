import React from 'react';
import Image from 'next/image';
import globe from '../public/globe.svg';
import phone from '../public/phone.svg';
import arrowRight from '../public/arrow-right.svg';
import parse from 'html-react-parser';
import style from './styles/portfolio-preview.module.scss';
import { useAnimate } from 'framer-motion';

function animatePortfolio(isVisible) {
  const [scope, animate] = useAnimate();
}

export default function Portfolio({ content }) {
  return (
    <div className={style.project}>
      <div className={style.project_text_content}>
        {parse(content.title)}
        <div className='flex'>
          <div className={style.platform}>
            <Image
              alt='platform-icon'
              src={content.platform === 'app' ? phone : globe}
            />
          </div>
          {content.roles.map((x = {}, idx) => (
            <div
              className={`${style.pebble} ${x.style} animate-pebble`}
              key={idx}>
              {x.title}
            </div>
          ))}
        </div>
        <a className='case-study-link'>
          <span>Case Study</span> <Image alt='link icon' src={arrowRight} />
        </a>
      </div>

      <Image width='500' height='400' src={content.image.url} alt='' />
    </div>
  );
}
