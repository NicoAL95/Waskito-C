import Image from "next/image"
import Link from "next/link";

// Import Icons
import { BsArrowRight } from 'react-icons/bs';

export default function Penerimaan() {
  return (
    <section className='penerimaan'>
        <div className='penTitle'>
            <p>Pengumuman penerimaan</p>
            <p>Siswa baru</p>
        </div>
        <div className='penWrapper'>
            <div className='penBox penLeft'>
                <div className='penImg'>
                    <Image
                        src='/libraries/img/svg/vector/speaker.svg'
                        layout='fill'
                        objectFit='contain'
                        className=''
                        alt='image-logo'
                    />
                </div>
                <div className='penDate'>
                    <h1>Jumat 23 Juli 2022</h1>
                </div>
                <div className='penTibox'>
                    <h1>Hasil Pengumuman PSB SD | G3</h1>
                </div>
                <div className='penDebox'>
                    <p>Hasil Pengumuman Penerimaan Siswa Baru SD Waskito.</p>
                </div>
                <div className='penDown'>
                    <Link href='/'>
                        <button className='penDobut'>
                            <h1>Download</h1>
                            <BsArrowRight/>
                        </button>
                    </Link>
                </div>
            </div>
            <div className='penBox penRight'>
                <div className='penImg'>
                    <Image
                        src='/libraries/img/svg/vector/speaker.svg'
                        layout='fill'
                        objectFit='contain'
                        className=''
                        alt='image-logo'
                    />
                </div>
                <div className='penDate'>
                    <h1>Jumat 23 Juli 2022</h1>
                </div>
                <div className='penTibox'>
                    <h1>Hasil Pengumuman PSB SD | G3</h1>
                </div>
                <div className='penDebox'>
                    <p>Hasil Pengumuman Penerimaan Siswa Baru SD Waskito.</p>
                </div>
                <div className='penDown'>
                    <Link href='/'>
                        <button className='penDobut'>
                            <h1>Download</h1>
                            <BsArrowRight/>
                        </button>
                    </Link>
                </div>
            </div>
            <div className='penBox penLeft'>
                <div className='penImg'>
                    <Image
                        src='/libraries/img/svg/vector/speaker.svg'
                        layout='fill'
                        objectFit='contain'
                        className=''
                        alt='image-logo'
                    />
                </div>
                <div className='penDate'>
                    <h1>Jumat 23 Juli 2022</h1>
                </div>
                <div className='penTibox'>
                    <h1>Hasil Pengumuman PSB SD | G3</h1>
                </div>
                <div className='penDebox'>
                    <p>Hasil Pengumuman Penerimaan Siswa Baru SD Waskito.</p>
                </div>
                <div className='penDown'>
                    <Link href='/'>
                        <button className='penDobut'>
                            <h1>Download</h1>
                            <BsArrowRight/>
                        </button>
                    </Link>
                </div>
            </div>
            <div className='penBox penRight'>
                <div className='penImg'>
                    <Image
                        src='/libraries/img/svg/vector/speaker.svg'
                        layout='fill'
                        objectFit='contain'
                        className=''
                        alt='image-logo'
                    />
                </div>
                <div className='penDate'>
                    <h1>Jumat 23 Juli 2022</h1>
                </div>
                <div className='penTibox'>
                    <h1>Hasil Pengumuman PSB SD | G3</h1>
                </div>
                <div className='penDebox'>
                    <p>Hasil Pengumuman Penerimaan Siswa Baru SD Waskito.</p>
                </div>
                <div className='penDown'>
                    <Link href='/'>
                        <button className='penDobut'>
                            <h1>Download</h1>
                            <BsArrowRight/>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}
