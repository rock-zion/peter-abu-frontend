import React from 'react';
import style from './styles/professional-presence.module.scss';

const linkArray = [
  { title: 'LinkedIn', link: '' },
  { title: 'Dribbble', link: '' },
  { title: 'Behance', link: '' },
  { title: 'Read.cv', link: '' },
];
export default function ProfessionalPresence() {
  return (
    <section className={`${style.professional_presence} scroll-area`}>
      <div className='main-content'>
        <h1 className='text-my-grey-0 profession-presence-children'>
          Professional Presence
        </h1>
        <ul className='flex profession-presence-children'>
          {linkArray.map((link, idx) => (
            <li key={idx} className={style.link_wrapper}>
              <a className={`${style.link} text-my-grey-1`} target='_blank'>
                <h2>{link.title}</h2>
              </a>
            </li>
          ))}
        </ul>
        <span className='body-text text-my-grey-1 profession-presence-children'>
          <h2>
            email me: <a href='mailto:pabu@hey.com'>pabu@hey.com</a>{' '}
          </h2>
        </span>
      </div>
    </section>
  );
}
