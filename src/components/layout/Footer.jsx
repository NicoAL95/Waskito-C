import Image from 'next/image';
import Link from 'next/link';

// Import Icons
import { SiLinktree } from 'react-icons/si';
import { GrYoutube, GrInstagram } from 'react-icons/gr';

export default function Footer() {
  return (
    <section className='footer'>
      <div className='footerWrapper'>
        <div className='fooBox'>
          <div className='fooLogo'>
            <div className='fooWas'>
              <Image
                src='/libraries/img/png/waskito.png'
                layout='fill'
                objectFit='contain'
                className=''
                alt='image-logo'
              />
            </div>
            <h1>
              Yayasan Pendidikan
              <br />
              Waskito
            </h1>
          </div>
          <div className='fooAdd'>
            <h1>
              Jl. Raya Pamulang Permai II No.75, Serua, Ciputat, Kota Tangerang
              Selatan, Banten 15414
            </h1>
          </div>
          <div className='fooNum'>
            <a href='#' className='fooHov'>
              &#40;021&#41; 749 7706
            </a>
            <a href='#' className='fooHov'>
              &#40;021&#41; 746 34107
            </a>
          </div>
        </div>
        <div className='fooLong'>
          <div className='fooBoxLinks'>
            <div className='fooTitle'>
              <h1>Services</h1>
            </div>
            <div className='fooLinks'>
              <Link href={'/'}>
                <h1 className='fooHov'>Fasilitas</h1>
              </Link>
              <Link href={'/'}>
                <h1 className='fooHov'>Program</h1>
              </Link>
              <Link href={'/'}>
                <h1 className='fooHov'>Jurusan</h1>
              </Link>
            </div>
          </div>
          <div className='fooBoxLinks'>
            <div className='fooTitle'>
              <h1>About</h1>
            </div>
            <div className='fooLinks'>
              <Link href={'/'}>
                <h1 className='fooHov'>Tentang Kami</h1>
              </Link>
              <Link href={'/'}>
                <h1 className='fooHov'>Informasi</h1>
              </Link>
              <Link href={'/'}>
                <h1 className='fooHov'>Artikel</h1>
              </Link>
              <Link href={'/'}>
                <h1 className='fooHov'>Galeri</h1>
              </Link>
            </div>
          </div>
          <div className='fooBoxLinks'>
            <div className='fooTitle'>
              <h1>Follow Us</h1>
            </div>
            <div className='fooLinks'>
              <a href='#' className='fooIco'>
                <SiLinktree />
                <h1>Linktree</h1>
              </a>
              <a href='#' className='fooIco'>
                <GrYoutube />
                <h1>Youtube</h1>
              </a>
              <a href='#' className='fooIco'>
                <GrInstagram />
                <h1>Instagram</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='fooBot'>
        <div className='fooCop'>
          <h1>
            Copyright © 2022. Yayasan Pendidikan Waskito. All rights reserved.
          </h1>
        </div>
        <div className='fooTerms'>
          <Link href={'/'}>
            <h1 className='fooHov'>Terms & Conditions</h1>
          </Link>
          <Link href={'/'}>
            <h1 className='fooHov'>Privacy Policy</h1>
          </Link>
        </div>
      </div>
    </section>
  );
}
