import React from 'react';
import style from './styles/portfolio-preview.module.scss';
import Portfolio from './Portfolio';

export default function PortfolioPreview({ portfolioPreviews }) {
  return (
    <section className='scroll-area' id='selected-work'>
      <div className={`${style.main} main-content`}>
        {portfolioPreviews.map((content = {}, idx) => (
          <Portfolio key={idx} content={content} />
        ))}
      </div>
    </section>
  );
}
