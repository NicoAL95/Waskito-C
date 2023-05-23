import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Icons
import { GoThreeBars } from 'react-icons/go';
import { MdClose} from 'react-icons/md';

export default function Navbar() {

   // useState Hooks
   const [showNavbar, setShowNavbar] = useState(false);
   const [navScroll, setShadow] = useState('');
 
   // animation
   const listenScrollEvent = () => {
     window.scrollY > 50 ? setShadow('navShad') : setShadow('');
   };
 
   // useEffect Hooks
   useEffect(() => {
     window.addEventListener('scroll', listenScrollEvent);
     return () => {
       window.removeEventListener('scroll', listenScrollEvent);
     };
   }, []);

  return (
    <section className={`${navScroll} navbar`}>
      <div className='navWrapper'>
        <div className='navLeft'>
          <div className="navLogo">
            <Image
                src='/libraries/img/png/waskito.png'
                layout='fill'
                objectFit='contain'
                className=''
                alt='image-logo'
            />
          </div>
          <h1 className='navName'>Yayasan Pendidikan Waskito</h1>
        </div>
        <div className='navRight'>
          <ul>
            <li>
              <button onClick={() => setShowNavbar(true)} className='threeBars'>
                <GoThreeBars />
              </button>
            </li>
            <li className={`${showNavbar ? 'navOn' : 'navOff'} navLinks`}>
              <div className="headLink">
                <div className="headLinkLogo">
                  <div className="linkLogo">
                    <Image
                    src='/libraries/img/png/waskito.png'
                    layout='fill'
                    objectFit='contain'
                    className=''
                    alt='image-logo'
                    />
                  </div>
                  <h1>Yayasan Pendidikan Waskito</h1>
                </div>
                <button onClick={() => setShowNavbar(false)} className=''>
                  <MdClose/>
                </button>
              </div>

              <Link href={'/'}>
                <span className='navActive navItem'>Home</span>
              </Link>
              <Link href={'/'}>
                <span className='navItem'>Informasi</span>
              </Link>
              <Link href={'/'}>
                <span className='navItem'>Artikel</span>
              </Link>
              <Link href={'/'}>
                <span className='navItem'>Gallery</span>
              </Link>
              <Link href={'/'}>
                <span className='navItem'>Siswa</span>
              </Link>

              <div className='botLink'>
                <h1>© 2022. Yayasan Pendidikan Waskito. All rights reserved.</h1>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
