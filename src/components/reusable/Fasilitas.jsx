import Image from "next/image"
import { useEffect, useState } from 'react';

// Icons
import { MdClose} from 'react-icons/md';

export default function Fasilitas() {

const [showFacility, setShowFacility] = useState(false);

  return (
    <section className='fasilitas'>
        <div className={`${showFacility ? 'fasFloatWrapper' : 'fasHidden'}`}>
            <div className='fasCenter'>
                <div className='faimTitle'>
                    <h1>Lab Komputer</h1>
                    <button onClick={() => setShowFacility(false)} className='animate-pulse'>
                        <MdClose/>
                    </button>
                </div>
                <div className='faimBox'>
                    <div className='faimPict'>
                    <Image
                          src='/libraries/img/png/facility/fac-1.png'
                          layout='fill'
                          className='object-cover rounded-[15px]'
                          alt='image-logo'
                      />
                    </div>
                </div>
            </div>
        </div>
        <div className='daftWrapper bg-mainBlue xs:rounded-[35px]'>
            <div className='fasCont'>
                <div className='daftTitle fasTitle'>
                    <p>Fasilitas Pendukung</p>
                    <p>Sekolah Waskito</p>
                </div>
                <div className='daftDesc text-mainWhite'>
                    <p>
                    Berikut adalah fasilitas resmi yang dimiliki oleh Sekolah Waskito. Fasilitas tersebut dapat digunakan untuk setiap murid sesuai dengan kebutuhan masing masing. 
                    </p>
                </div>
            </div>
            <div className='daftImg'>
                <Image
                        src='/libraries/img/png/peoples/fasilitas.png'
                        layout='fill'
                        className='z-[30] object-cover gm:object-contain xs:rounded-b-[35px]'
                        alt='image-logo'
                    />
                <div className='daftBg'>
                    <div className='relative w-full h-full'>
                        <Image
                            src='/libraries/img/svg/vector/fasilitasBg.svg'
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
            <div className='fasBox'>
                <div className='fasPush'>
                    <div className='fapicWrap'>
                        <div className='fapicCircle'>
                            <div className='fapicIco'>
                                <Image
                                src='/libraries/img/svg/icons/multimedia.svg'
                                layout='fill'
                                className='object-contain'
                                alt='image-logo'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='faboxTitle'>
                        <h1>Lab Komputer</h1>
                    </div>
                    <div className='faboxDesc'>
                        <h1>Lab komputer dengan spesikasi yang sangat memumpuni untuk meningkatkan skill siswa sekolah waskito</h1>
                    </div>
                </div>
                <div className="faboxBut">
                    <button onClick={() => setShowFacility(true)} className='faboxHov'>Lihat Gambar</button>
                </div>
            </div>
            <div className='fasBox'>
                <div className='fasPush'>
                    <div className='fapicWrap'>
                        <div className='fapicCircle'>
                            <div className='fapicIco'>
                                <Image
                                src='/libraries/img/svg/icons/lapangan.svg'
                                layout='fill'
                                className='object-contain'
                                alt='image-logo'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='faboxTitle'>
                        <h1>Lapangan Indoor</h1>
                    </div>
                    <div className='faboxDesc'>
                        <h1>Lapangan Indoor adalah salah satu fasilitas yang mendukung kegiatan siswa dalam berolahraga di sekolah waskito</h1>
                    </div>
                </div>
                <div className="faboxBut">
                    <button onClick={() => setShowFacility(true)} className='faboxHov'>Lihat Gambar</button>
                </div>
            </div>
            <div className='fasBox'>
                <div className='fasPush'>
                    <div className='fapicWrap'>
                        <div className='fapicCircle'>
                            <div className='fapicIco'>
                                <Image
                                src='/libraries/img/svg/icons/parkir.svg'
                                layout='fill'
                                className='object-contain'
                                alt='image-logo'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='faboxTitle'>
                        <h1>Parkir Indoor</h1>
                    </div>
                    <div className='faboxDesc'>
                        <h1>Parkiran Indoor adalah salah satu fasilitas unggulan untuk seluruh keluarga di Sekolah Waskito</h1>
                    </div>
                </div>
                <div className="faboxBut">
                    <button onClick={() => setShowFacility(true)} className='faboxHov'>Lihat Gambar</button>
                </div>
            </div>
            <div className='fasBox'>
                <div className='fasPush'>
                    <div className='fapicWrap'>
                        <div className='fapicCircle'>
                            <div className='fapicIco'>
                                <Image
                                src='/libraries/img/svg/icons/musholla.svg'
                                layout='fill'
                                className='object-contain'
                                alt='image-logo'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='faboxTitle'>
                        <h1>Musholla</h1>
                    </div>
                    <div className='faboxDesc'>
                        <h1>Musholla merupakan fasilitas yang dimiliki oleh Sekolah Waskito, dan dapat digunakan oleh siapapun</h1>
                    </div>
                </div>
                <div className="faboxBut">
                    <button onClick={() => setShowFacility(true)} className='faboxHov'>Lihat Gambar</button>
                </div>
            </div>
            <div className='fasBox'>
                <div className='fasPush'>
                    <div className='fapicWrap'>
                        <div className='fapicCircle'>
                            <div className='fapicIco'>
                                <Image
                                src='/libraries/img/svg/icons/kantin.svg'
                                layout='fill'
                                className='object-contain'
                                alt='image-logo'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='faboxTitle'>
                        <h1>Kantin</h1>
                    </div>
                    <div className='faboxDesc'>
                        <h1>Kantin di Sekolah Waskito memiliki banyak pilihan makanan, dan selalu dijaga kebersihannya</h1>
                    </div>
                </div>
                <div className="faboxBut">
                    <button onClick={() => setShowFacility(true)} className='faboxHov'>Lihat Gambar</button>
                </div>
            </div>
            <div className='fasBox'>
                <div className='fasPush'>
                    <div className='fapicWrap'>
                        <div className='fapicCircle'>
                            <div className='fapicIco'>
                                <Image
                                src='/libraries/img/svg/icons/perpustakaan.svg'
                                layout='fill'
                                className='object-contain'
                                alt='image-logo'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='faboxTitle'>
                        <h1>Musholla</h1>
                    </div>
                    <div className='faboxDesc'>
                        <h1>Perpustakaan yang ada di Sekolah Waskito memiliki buku yang lengkap dan dapat membantu siswa</h1>
                    </div>
                </div>
                <div className="faboxBut">
                    <button onClick={() => setShowFacility(true)} className='faboxHov'>Lihat Gambar</button>
                </div>
            </div>
            <div className='fasBox'>
                <div className='fasPush'>
                    <div className='fapicWrap'>
                        <div className='fapicCircle'>
                            <div className='fapicIco'>
                                <Image
                                src='/libraries/img/svg/icons/bahasa.svg'
                                layout='fill'
                                className='object-contain'
                                alt='image-logo'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='faboxTitle'>
                        <h1>Lab Bahasa</h1>
                    </div>
                    <div className='faboxDesc'>
                        <h1>Lab bahasa merupakan fasilitas pendukung untuk kegiatan belajar siswa dan siswi</h1>
                    </div>
                </div>
                <div className="faboxBut">
                    <button onClick={() => setShowFacility(true)} className='faboxHov'>Lihat Gambar</button>
                </div>
            </div>
            <div className='fasBox'>
                <div className='fasPush'>
                    <div className='fapicWrap'>
                        <div className='fapicCircle'>
                            <div className='fapicIco'>
                                <Image
                                src='/libraries/img/svg/icons/ipa.svg'
                                layout='fill'
                                className='object-contain'
                                alt='image-logo'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='faboxTitle'>
                        <h1>Lab IPA</h1>
                    </div>
                    <div className='faboxDesc'>
                        <h1>Lab IPA dapat digunakan untuk melakukan eksperimen di Sekolah Waskito</h1>
                    </div>
                </div>
                <div className="faboxBut">
                    <button onClick={() => setShowFacility(true)} className='faboxHov'>Lihat Gambar</button>
                </div>
            </div>
            <div className='fasBox'>
                <div className='fasPush'>
                    <div className='fapicWrap'>
                        <div className='fapicCircle'>
                            <div className='fapicIco'>
                                <Image
                                src='/libraries/img/svg/icons/uks.svg'
                                layout='fill'
                                className='object-contain'
                                alt='image-logo'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='faboxTitle'>
                        <h1>UKS</h1>
                    </div>
                    <div className='faboxDesc'>
                        <h1>UKS di Sekolah Waskito memiliki dokter yang selalu standby untuk menangani murid</h1>
                    </div>
                </div>
                <div className="faboxBut">
                    <button onClick={() => setShowFacility(true)} className='faboxHov'>Lihat Gambar</button>
                </div>
            </div>
            <div className='fasBox fasLast'>
                <div className='fasPush'>
                    <div className='fapicWrap'>
                        <div className='fapicCircle'>
                            <div className='fapicIco'>
                                <Image
                                src='/libraries/img/svg/icons/aula.svg'
                                layout='fill'
                                className='object-contain'
                                alt='image-logo'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='faboxTitle'>
                        <h1>Aula</h1>
                    </div>
                    <div className='faboxDesc'>
                        <h1>Aula Sekolah Waskito dapat digunakan untuk kegiatan yang ada di Sekolah Waskito</h1>
                    </div>
                </div>
                <div className="faboxBut">
                    <button onClick={() => setShowFacility(true)} className='faboxHov'>Lihat Gambar</button>
                </div>
            </div>
        </div>
    </section>
  )
}
