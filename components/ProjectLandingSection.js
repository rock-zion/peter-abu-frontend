import Image from 'next/image';
import style from './styles/project-landing-section.module.scss';

export default function ProjectLandingSection() {
  return (
    <div>
      <div className={`${style.main} main-content`}>
        <div className={`${style.image_container} image-container`}>
          <Image
            src='https://res.cloudinary.com/dixqgrowr/image/upload/v1688812151/static-website/mz6afhhfdwsfcgpa5e73.png'
            alt=''
            fill={true}
            className='image'
          />
        </div>
        <div className={`${style.project_details} bg-my-bg-color-0 flex-grow`}>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
