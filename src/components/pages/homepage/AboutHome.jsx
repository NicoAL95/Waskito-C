import Image from "next/image"
import Link from "next/link"

export default function AboutHome() {
  return (
    <section className='aboutHome'>
        <div className='aboWrapper'>
            <div className='aboCont'>
                <div className='aboTitle'>
                    <h1>Tentang Kami</h1>
                </div>
                <div className='aboDesc'>
                    <p>
                    Yayasan pendidikan waskito berdiri sejak tahun 1964, berawal dari tempat penitipan anak yang berada di Jakarta, Setiabudi. lalu merambah ke jenjang SD-SMP-SMA, lalu berdiri di sebuah daerah Tangerang Selatan, Pamulang. yang memiliki Jenjang SD-SMP-SMA-SMK. Dengan target pendidikan yang merata dan bisa merangkup semua kalangan, mulai kalangan bawah sampai atas.
                    </p>
                </div>
                <div className='aboBut'>
                    <Link href={'/'}>
                        <h1 className='darBut w-full ms:w-fit'>Selengkapnya</h1>
                    </Link>
                </div>
            </div>
            <div className='aboLogo'>
                <div className='relative w-full h-full'>
                    <Image
                        src='/libraries/img/png/waskito.png'
                        layout='fill'
                        objectFit='contain'
                        className=''
                        alt='image-logo'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
