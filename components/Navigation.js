import Link from 'next/link';
import style from './styles/navigation.module.scss';
import Image from 'next/image';
import logo from '../public/morphis-fuzzy.png';
import arrowRight from '../public/arrow-right.svg';

export default function Navigation() {
  return (
    <nav className={style.main}>
      <div className={`${style.main_content} main-content`}>
        <Link href='/'>
          <div className={`${style.image_container} image-container`}>
            <Image className='image' fill={true} src={logo} alt='' />
          </div>
        </Link>
        <Link href='/projects' className={style.navlink}>
          <span>Next Project</span> <Image alt='link icon' src={arrowRight} />
        </Link>
      </div>
    </nav>
  );
}
