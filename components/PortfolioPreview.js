import React from 'react';
import style from './styles/portfolio-preview.module.scss';
import Portfolio from './Portfolio';

const urlPrefix = 'https://res.cloudinary.com/dixqgrowr/image/upload';
const portfolioPreview = [
  {
    platform: 'app',
    title: `
      <h2 class="animate-portfolio-title"> <strong>Bento - </strong>Better networking and job search for professionals  </h2>
    `,
    roles: [
      { style: 'bg-my-orange text-my-grey-0', title: 'Sole Designer' },
      { style: 'bg-my-bg-color-1 text-my-grey-1', title: 'Research' },
      { style: 'bg-my-bg-color-1 text-my-grey-1', title: 'Interface Design' },
    ],
    link: '',
    image: {
      url: `${urlPrefix}/v1688563948/static-website/b2ekdrzo12holesrqmp2.png`,
      public_id: '',
    },
  },
  {
    platform: 'web',
    title: `
      <h2 class="animate-portfolio-title"> <strong>Clink - </strong>Payment links and aggregation for online vendors & small business</h2>
    `,
    roles: [
      { style: 'bg-my-lemon text-my-grey-0', title: 'Co-Designer' },
      { style: 'bg-my-bg-color-1 text-my-grey-1', title: 'Research' },
      { style: 'bg-my-bg-color-1 text-my-grey-1', title: 'Interface Design' },
    ],
    link: '',
    image: {
      url: `${urlPrefix}/v1688563948/static-website/kpz5xzwws8wyqpovkqlx.png`,
      public_id: '',
    },
  },
  {
    platform: 'app',
    title: `
      <h2 class="animate-portfolio-title"> <strong>SparkSend - </strong>Faster cross-border payments, powered by Crypto rails</h2>
    `,
    roles: [
      { style: 'bg-my-orange text-my-grey-0', title: 'Co-Designer' },
      { style: 'bg-my-bg-color-1 text-my-grey-1', title: 'Interface Design' },
    ],
    link: '',
    image: {
      url: `${urlPrefix}/v1688563949/static-website/vngx9kfojblwzhmlatvd.png`,
      public_id: '',
    },
  },
  {
    platform: 'web',
    title: `
      <h2 class="animate-portfolio-title"> <strong>ShopTopUp Pay -  </strong>SInstant Payment collection for FMCG Vendors</h2>
    `,
    roles: [
      { style: 'bg-my-orange text-my-grey-0', title: 'Sole Designer' },
      { style: 'bg-my-bg-color-1 text-my-grey-1', title: 'Research' },
      { style: 'bg-my-bg-color-1 text-my-grey-1', title: 'Interface Design' },
    ],
    link: '',
    image: {
      url: `${urlPrefix}/v1688563948/static-website/ceknd7knmdd0nnj8zti3.png`,
      public_id: '',
    },
  },
  {
    platform: 'app',
    title: `
      <h2 class="animate-portfolio-title"> <strong>Facile - </strong>Faster USSD payments for Nigerians</h2>
    `,
    roles: [
      { style: 'bg-my-orange text-my-grey-0', title: 'Sole Designer' },
      { style: 'bg-my-bg-color-1 text-my-grey-1', title: 'Research' },
      { style: 'bg-my-bg-color-1 text-my-grey-1', title: 'Interface Design' },
    ],
    link: '',
    image: {
      url: `${urlPrefix}/v1688563949/static-website/xzpq9hfvf1sokz0ttmnt.png`,
      public_id: '',
    },
  },
];

export default function PortfolioPreview() {
  return (
    <section className='scroll-area' id='selected-work'>
      <div className={`${style.main} main-content`}>
        {portfolioPreview.map((content = {}, idx) => (
          <Portfolio key={idx} content={content} />
        ))}
      </div>
    </section>
  );
}
