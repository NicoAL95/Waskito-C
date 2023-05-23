import Image from 'next/image';
import Link from 'next/link';

export default function HeaderHome() {
  return (
    <section className='headerHome'>
      <div className='heHome'>
        <div className='heCont'>
          <div className='heTitle'>
            <p>Selamat Datang</p>
            <p>Para Pelajar Terbaik</p>
            <p>Sekolah Waskito</p>
          </div>
          <div className='heDesc'>
            <h6>
              Sekolah Waskito merupakan sekolah terbaik yang berada tepat di
              Tangerang Selatan, dengan fasilitas super lengkap dan juga
              menghasilkan lulusan dengan kualitas yang sangat terbaik, sehingga
              menciptakan lulusan yang berprestasi dan mandiri.
            </h6>
          </div>
          <div className='heBut'>
            <a href='#' className='yelBut'>
              Daftar Sekarang
            </a>
            <Link href={'/'}>
              <button href='#' className='outBut'>
                Pelajari Lebih Lanjut
              </button>
            </Link>
          </div>
          <div className='heCamp'>
            <div className='heCampBox'>
              <Image
                src='/libraries/img/png/campus/camp-1.png'
                layout='fill'
                objectFit='contain'
                className=''
                alt='image-logo'
              />
            </div>
            <div className='heCampBox'>
              <Image
                src='/libraries/img/png/campus/camp-2.png'
                layout='fill'
                objectFit='contain'
                className=''
                alt='image-logo'
              />
            </div>
            <div className='heCampBox'>
              <Image
                src='/libraries/img/png/campus/camp-3.png'
                layout='fill'
                objectFit='contain'
                className=''
                alt='image-logo'
              />
            </div>
            <div className='heCampBox'>
              <Image
                src='/libraries/img/png/campus/camp-4.png'
                layout='fill'
                objectFit='contain'
                className=''
                alt='image-logo'
              />
            </div>
          </div>
        </div>
        <div className='heVect'>
          <div className='heVectRel'>
            <Image
              src='/libraries/img/svg/vector/header.svg'
              layout='fill'
              objectFit='contain'
              className=''
              alt='image-logo'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
