import Image from "next/image"

export default function Hubungi() {
  return (
    <section className='hubungi'>
        <div className='daftWrapper bg-mainYellow'>
            <div className='hubCont'>
                <div className='daftTitle kuoTitle'>
                    <p>Hubungi Kami</p>
                    <p>Segera Untuk Info</p>
                    <p>Lebih Lanjut</p>
                </div>
                <div className='daftDesc text-bluBlack'>
                    <p>
                    Dapatkan informasi seputar sekolah waskito
                    </p>
                </div>
                <div className='daftBut mt-[30px]'>
                    <a href="#" className="blaBut">Hubungi Kami</a>
                </div>
            </div>
            <div className='daftImg'>
                <Image
                        src='/libraries/img/png/peoples/hubungi.png'
                        layout='fill'
                        className='z-[30] object-cover sm:object-contain '
                        alt='image-logo'
                    />
                <div className='daftBg'>
                    <div className='relative w-full h-full'>
                        <Image
                            src='/libraries/img/svg/vector/hubungiBg.svg'
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
