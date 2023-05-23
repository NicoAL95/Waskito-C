import Image from "next/image"

export default function WelcomeHome() {
  return (
    <section className='welcomeHome'>
        <div className="comeWrapper">
            <div className='comeCont'>
                <div className='comeTitle'>
                    <p>Selamat Datang</p>
                    <p>Pelajar Indonesia</p>
                </div>
                <div className='comeDesc'>
                    <p>
                    Selamat datang kami ucapkan untuk para pelajar hebat di Indonesia. Semoga kamu suka dengan tampilan website hasil karya alumni SMK Multimedia Waskito 2020.
                    </p>
                </div>
            </div>
            <div className='comeImg'>
                <div className='relative w-full h-[400px] gm:h-full'>
                    <Image
                        src='/libraries/img/svg/vector/welcome.svg'
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
