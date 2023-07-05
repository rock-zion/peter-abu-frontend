import React from 'react';
import LandingSection from '@/components/LandingSection';
import PortfolioPreview from '@/components/PortfolioPreview';
import HighlightedExperiences from '@/components/HighlightedExperiences';
import ProfessionalPresence from '@/components/ProfessionalPresence';

export default function HomePage() {
  const highlightedExperiencesRef = React.createRef();
  return (
    <div className='scroll-container'>
      <LandingSection />
      <PortfolioPreview />
      <HighlightedExperiences ref={highlightedExperiencesRef} />
      <ProfessionalPresence />
    </div>
  );
}
