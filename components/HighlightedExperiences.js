import React from 'react';
import style from './styles/highlighted-experiences.module.scss';
import parse from 'html-react-parser';
import Image from 'next/image';
import cylinder from '../public/morphis-cylinder.svg';

const experiences = [
  {
    title: 'Lead Designer - Helicarrier Studio',
    body: `<p class="body-text text-my-white">
    In my time at Helicarrier, I've had the chance to dive head-first into design and user research across a spectrum of products. From <strong> Sendcash </strong> and <strong> SendCashPay </strong> to <strong> Buycoins </strong> and <strong> Useramp </strong>, my goal was always to create a unified and striking UX.
    </p>
    
    <p class="body-text text-my-white">
    My approach? Taking the reins of the entire product design lifecycle. From the initial concept all the way through to implementation, I've always been about crafting design that puts the user first. And it's paid off - just look at SendCashPay. I helped optimize this product and it's handled over $3.2 million in transactions.
    </p>

    <p class="body-text text-my-white">
    But, I think one of my proudest moments has to be leading the design for the SendCash Mobile app. We've built up a community of 24,000 active users and we're still growing. It feels good to know that our app is driving an 18% month-on-month revenue growth and that we're making our users' lives that bit easier.
    </p>
    `,
  },
  {
    title: 'Lead Designer - Helicarrier Studio',
    body: `<p class="body-text text-my-white">
    At Modus Create, I was a visual designer for a diverse set of client and in-house projects. <strong> My job? To make UX research findings, user flows, and wireframes come alive with visually engaging and high-fidelity UI designs. </strong>
    </p>
    
    <p class="body-text text-my-white">
    Design principles, typography, color theory, and visual hierarchy were my tools of choice. The aim was always about improving user engagement and refining the overall user experience.
    </p>

    <p class="body-text text-my-white">
    And, I didn't just design and step back. I rolled up my sleeves and worked closely with developers during the implementation phase. Ensuring my designs were accurately translated into the final product was important to me.
    </p>
    `,
  },
  {
    title: 'Product Designer - TradeDepot inc.',
    body: `<p class="body-text text-my-white">
    At TradeDepot, I was part of some really cool initiatives. One of my major projects was leading the design for <strong> ShopTopUp Pay. </strong> It's an e-commerce platform that's making a real difference - we onboarded over 5,000 distributors across Africa and reached more than a million informal retailers.
    </p>
    
    <p class="body-text text-my-white">
    I also got to work with a super talented design team on <strong> ShopTopUp </strong>. Our goal was to improve the user experience and enable informal retailers to easily procure wholesale goods and gain access to credit. It was all about helping them expand their businesses. Then there was the <strong> ShopTopUp Field Manager </strong> app. I was put in charge of the redesign and focused on optimizing its functionality and usability. The result? A streamlined process for field managers and improved overall efficiency.
    </p>


    <p class="body-text text-my-white">
    Throughout my time at TradeDepot, I was also able to collaborate closely with Product Managers and engineers. We worked on creating intuitive interfaces and seamless user experiences across TradeDepot's product suite. It was all about enhancing platform usability and driving user engagement.
    </p>
    `,
  },
  {
    title: 'Product Designer - Swipe.',
    body: `<p class="body-text text-my-white">
    At Swipe, I had the opportunity to lead a stellar design team of three product designers and an illustrator. We had our hands full, overseeing several projects and working closely with product owners and managers. Our goal? To bring the product vision to life through human-centered design.
    </p>

    <p class="body-text text-my-white">
    One of the standout projects was the <strong> Stanbic IBTC Mobile banking app </strong> redesign, which I led. Knowing the app has over a million downloads gave me a real sense of achievement.
    </p>
    
    <p class="body-text text-my-white">
    I also conducted both qualitative and quantitative research for various clients and our own in-house products. It was all about ensuring we made data-informed decisions.
    </p>


    <p class="body-text text-my-white">
    Among the other projects I led were some truly unique products. <strong> Linda Ikeji TV</strong>, a video-on-demand platform offering original content. <strong>OneOS</strong>, a cloud-based, end-to-end cinema management system. <strong>Callerview</strong>, an app that displays video snippets when a call comes in and <strong>Uziso</strong>, a UN-backed e-disbursement platform for distributing funds to farmers in northern Nigeria.
    </p>
    `,
  },
];

export default function HighlightedExperiences() {
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
