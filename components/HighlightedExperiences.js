import React from 'react';
import style from './styles/highlighted-experiences.module.scss';
import parse from 'html-react-parser';
import Image from 'next/image';
import cylinder from '../public/morphis-cylinder.svg';

  return (
    <section
      className={`${style.main} scroll-area`}
      id='highlighted-experience'>
      <div className='main-content'>
        <div className={style.experiences}>
          <h1 className='text-my-white'>Highlighted experiences</h1>
          <div>
            {experiences.map((experience = {}, idx) => (
              <div key={idx}>
                <h2 className={`${style.experience_title} text-my-white`}>
                  {experience.title}
                </h2>
                {parse(experience.body)}
              </div>
            ))}
          </div>
        </div>
        <div>
          <Image src={cylinder} alt='ornamental cylinder' />
        </div>
      </div>
    </section>
  );
}

`







`;
