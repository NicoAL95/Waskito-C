import Image from "next/image"
import Link from "next/link";

// Import Icons
import { BsArrowRight } from 'react-icons/bs';

export default function Artikel() {
  return (
    <section className='artikel'>
        <div className='artBox'>
            <div className='artGrid'>
                <div className='artCont'>
                    <div>
                        <div className='artDate'>
                            <h1>02 Agustus 2022</h1>
                        </div>
                        <div className='artTitle'>
                            <h1>MPLS Waskito Tahun 2022 Berlangsung Meriah</h1>
                        </div>
                        <div className='penDown'>
                            <Link href='/'>
                                <button className='artBut'>
                                    <h1>Read More</h1>
                                    <BsArrowRight/>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='artPict'>
                    <div className='artRatio'>
                        <Image
                            src='/libraries/img/png/facility/fac-1.png'
                            layout='fill'
                            objectFit='cover'
                            className='rounded-lg'
                            alt='image-logo'
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className='artBox'>
            <div className='artGrid'>
                <div className='artCont'>
                    <div>
                        <div className='artDate'>
                            <h1>18 Juli 2022</h1>
                        </div>
                        <div className='artTitle'>
                            <h1>SMK Multimedia Waskito 2022 Kunjungan Ke MNC Group</h1>
                        </div>
                        <div className='penDown'>
                            <Link href='/'>
                                <button className='artBut'>
                                    <h1>Read More</h1>
                                    <BsArrowRight/>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='artPict'>
                    <div className='artRatio'>
                        <Image
                            src='/libraries/img/png/facility/fac-1.png'
                            layout='fill'
                            objectFit='cover'
                            className='rounded-lg'
                            alt='image-logo'
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className='artBox'>
            <div className='artGrid'>
                <div className='artCont'>
                    <div>
                        <div className='artDate'>
                            <h1>08 April 2022</h1>
                        </div>
                        <div className='artTitle'>
                            <h1>SMA Waskito Menjadi Pengibar Bendera Di Walikota Tangsel </h1>
                        </div>
                        <div className='penDown'>
                            <Link href='/'>
                                <button className='artBut'>
                                    <h1>Read More</h1>
                                    <BsArrowRight/>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='artPict'>
                    <div className='artRatio'>
                        <Image
                            src='/libraries/img/png/facility/fac-1.png'
                            layout='fill'
                            objectFit='cover'
                            className='rounded-lg'
                            alt='image-logo'
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
