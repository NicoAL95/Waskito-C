import Image from "next/image"

export default function Kuota() {
  return (
    <section className='kuota'>
        <div className='daftWrapper bg-mainYellow xs:rounded-[35px]'>
            <div className='fasCont'>
                <div className='daftTitle kuoTitle'>
                    <p>Informasi</p>
                    <p>Sisa Kuota Pelajar</p>
                </div>
                <div className='daftDesc text-bluBlack'>
                    <p>
                    Berikut adalah fasilitas resmi yang dimiliki oleh Sekolah Waskito. Fasilitas tersebut dapat digunakan untuk setiap murid sesuai dengan kebutuhan masing masing. 
                    </p>
                </div>
            </div>
            <div className='daftImg'>
                <Image
                        src='/libraries/img/png/peoples/kuota.png'
                        layout='fill'
                        className='z-[30] object-cover gm:object-contain xs:rounded-b-[35px]'
                        alt='image-logo'
                    />
                <div className='daftBg'>
                    <div className='relative w-full h-full'>
                        <Image
                            src='/libraries/img/svg/vector/kuotaBg.svg'
                            layout='fill'
                            objectFit='contain'
                            className=''
                            alt='image-logo'
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className='fasColWrap'>
            <div className='kuBox'>
                <div className='kupPush'>
                    <div className='kupicWrap'>
                        <div className='kupicCircle'>
                            <div className='kupicIco'>
                                <Image
                                src='/libraries/img/svg/icons/sd.svg'
                                layout='fill'
                                className='object-contain'
                                alt='image-logo'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='kuboxTitle'>
                        <h1>Sekolah Dasar</h1>
                    </div>
                    <div className='kuboxGraph'>
                        <div className='kuboFill w-[75%]'></div>
                    </div>
                    <div className='kuboxDate'>
                        <h1>07 Januari 2022</h1>
                    </div>
                </div>
            </div>
            <div className='kuBox'>
                <div className='kupPush'>
                    <div className='kupicWrap'>
                        <div className='kupicCircle'>
                            <div className='kupicIco'>
                                <Image
                                src='/libraries/img/svg/icons/smp.svg'
                                layout='fill'
                                className='object-contain'
                                alt='image-logo'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='kuboxTitle'>
                        <h1>Sekolah Menengah Pertama</h1>
                    </div>
                    <div className='kuboxGraph'>
                        <div className='kuboFill w-[25%]'></div>
                    </div>
                    <div className='kuboxDate'>
                        <h1>07 Januari 2022</h1>
                    </div>
                </div>
            </div>
            <div className='kuBox'>
                <div className='kupPush'>
                    <div className='kupicWrap'>
                        <div className='kupicCircle'>
                            <div className='kupicIco'>
                                <Image
                                src='/libraries/img/svg/icons/sma.svg'
                                layout='fill'
                                className='object-contain'
                                alt='image-logo'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='kuboxTitle'>
                        <h1>Sekolah Menengah Atas</h1>
                    </div>
                    <div className='kuboxGraph'>
                        <div className='kuboFill w-[55%]'></div>
                    </div>
                    <div className='kuboxDate'>
                        <h1>07 Januari 2022</h1>
                    </div>
                </div>
            </div>
            <div className='kuBox'>
                <div className='kupPush'>
                    <div className='kupicWrap'>
                        <div className='kupicCircle'>
                            <div className='kupicIco'>
                                <Image
                                src='/libraries/img/svg/icons/multimedia.svg'
                                layout='fill'
                                className='object-contain'
                                alt='image-logo'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='kuboxTitle'>
                        <h1>Multimedia</h1>
                    </div>
                    <div className='kuboxGraph'>
                        <div className='kuboFill w-[95%]'></div>
                    </div>
                    <div className='kuboxDate'>
                        <h1>07 Januari 2022</h1>
                    </div>
                </div>
            </div>
            <div className='kuBox'>
                <div className='kupPush'>
                    <div className='kupicWrap'>
                        <div className='kupicCircle'>
                            <div className='kupicIco'>
                                <Image
                                src='/libraries/img/svg/icons/perhotelan.svg'
                                layout='fill'
                                className='object-contain'
                                alt='image-logo'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='kuboxTitle'>
                        <h1>Perhotelan</h1>
                    </div>
                    <div className='kuboxGraph'>
                        <div className='kuboFill w-[35%]'></div>
                    </div>
                    <div className='kuboxDate'>
                        <h1>07 Januari 2022</h1>
                    </div>
                </div>
            </div>
            <div className='kuBox'>
                <div className='kupPush'>
                    <div className='kupicWrap'>
                        <div className='kupicCircle'>
                            <div className='kupicIco'>
                                <Image
                                src='/libraries/img/svg/icons/perkantoran.svg'
                                layout='fill'
                                className='object-contain'
                                alt='image-logo'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='kuboxTitle'>
                        <h1>perkantoran</h1>
                    </div>
                    <div className='kuboxGraph'>
                        <div className='kuboFill w-[25%]'></div>
                    </div>
                    <div className='kuboxDate'>
                        <h1>07 Januari 2022</h1>
                    </div>
                </div>
            </div>
            <div className='kuBox kuLast'>
                <div className='kupPush'>
                    <div className='kupicWrap'>
                        <div className='kupicCircle'>
                            <div className='kupicIco'>
                                <Image
                                src='/libraries/img/svg/icons/perbankan.svg'
                                layout='fill'
                                className='object-contain'
                                alt='image-logo'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='kuboxTitle'>
                        <h1>Perbankan</h1>
                    </div>
                    <div className='kuboxGraph'>
                        <div className='kuboFill w-[5%]'></div>
                    </div>
                    <div className='kuboxDate'>
                        <h1>07 Januari 2022</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
