import Image from "next/image"

export default function Pendaftaran() {
  return (
    <section className='pendaftaran'>
        <div className='daftWrapper'>
            <div className='daftCont'>
                <div className='daftTitle'>
                    <p>Pendaftaran G2</p>
                    <p>Telah Dibuka</p>
                </div>
                <div className='daftDesc'>
                    <p>
                    Penerimaan calon siswa dan siswi baru G2 tahun 2023 telah dibuka. Segera amankan kursi kamu untuk menempuh pendidikan di Yayasan Pendidikan Waskito.
                    </p>
                </div>
                <div className='daftBut mt-[30px]'>
                    <a href="#" className="blaBut">Daftar Sekarang</a>
                </div>
            </div>
            <div className='daftImg'>
                <Image
                        src='/libraries/img/png/peoples/pendaftar.png'
                        layout='fill'
                        className='z-[30] object-cover gm:object-contain'
                        alt='image-logo'
                    />
                <div className='daftBg'>
                    <div className='relative w-full h-full'>
                        <Image
                            src='/libraries/img/svg/vector/daftarBg2.svg'
                            layout='fill'
                            objectFit='contain'
                            className=''
                            alt='image-logo'
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
