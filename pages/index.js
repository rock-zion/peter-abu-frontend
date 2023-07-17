import client from '@/apollo-client';
import { HOME_PAGE_DATA } from '@/queries';

import React from 'react';
import LandingSection from '@/components/LandingSection';
import PortfolioPreview from '@/components/PortfolioPreview';
import HighlightedExperiences from '@/components/HighlightedExperiences';
import ProfessionalPresence from '@/components/ProfessionalPresence';

export default function HomePage({ data }) {
  console.log('data', data);
  const {
    landingTitle,
    landingSubTitle,
    landingButtonText,
    portfolioPreviews,
    experiences,
    socials,
  } = data;
  const highlightedExperiencesRef = React.createRef();
  return (
    <div className='scroll-container'>
      <LandingSection
        data={{ landingTitle, landingSubTitle, landingButtonText }}
      />
      <PortfolioPreview portfolioPreviews={portfolioPreviews} />
      <HighlightedExperiences
        experiences={experiences}
        ref={highlightedExperiencesRef}
      />
      <ProfessionalPresence socials={socials} />
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: HOME_PAGE_DATA,
  });
  return {
    props: {
      data: data.homePage.data.attributes,
    },
  };
}
