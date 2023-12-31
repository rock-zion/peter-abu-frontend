import React, { useRef } from 'react';
import style from './styles/professional-presence.module.scss';
import useStaggerAnimation from '@/lib/useStaggerAnimation';
import useIntersectionObserver from '@/lib/useIntersectionObserver';

const linkArray = [
  { title: 'LinkedIn', link: '' },
  { title: 'Dribbble', link: '' },
  { title: 'Behance', link: '' },
  { title: 'Read.cv', link: '' },
];
export default function ProfessionalPresence() {
  const professionalPresenceRef = useRef(null);
  const { isVisible } = useIntersectionObserver({
    ref: professionalPresenceRef,
    threshold: 0.1,
    rootMargin: '0px',
  });

  const scope = useStaggerAnimation(isVisible);
  return (
    <section
      ref={professionalPresenceRef}
      className={`${style.professional_presence} scroll-area`}>
      <div ref={scope} className='main-content'>
        <h1 className='text-my-grey-0 profession-presence-children animate-stagger'>
          Professional Presence
        </h1>
        <ul className='flex flex-wrap profession-presence-children animate-stagger'>
          {linkArray.map((link, idx) => (
            <li key={idx} className={style.link_wrapper}>
              <a className={`${style.link} text-my-grey-1`} target='_blank'>
                <h2>{link.title}</h2>
              </a>
            </li>
          ))}
        </ul>
        <span className='body-text text-my-grey-1 profession-presence-children animate-stagger'>
          <h2>
            email me: <a href='mailto:pabu@hey.com'>pabu@hey.com</a>{' '}
          </h2>
        </span>
      </div>
    </section>
  );
}
