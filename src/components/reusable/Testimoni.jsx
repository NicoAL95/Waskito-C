import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper';

export default function Testimoni() {
  return (
    <section className='testimoni'>
        <div className='testiTitle'>
            <h1>Para Alumni</h1>
        </div>
        <div className='sliderTesti'>
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            grabCursor={true}
            autoplay={{
                delay: 4500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                10: {
                slidesPerView: 1,
                spaceBetween: 0,
                },
                870: {
                slidesPerView: 2,
                spaceBetween: 40,
                },
                1200: {
                slidesPerView: 3,
                spaceBetween: 50,
                },
            }}
            modules={[Autoplay, Pagination]}
            >
            {/* dinamis */}
            <SwiperSlide>
                <div className='miniCard'>
                <div className='miniHead'>
                    <div className='miniImg'>
                    <Image
                        src='/libraries/img/png/testimoni/rico.png'
                        layout='fill'
                        objectFit='cover'
                        className='imgFace'
                        alt=''
                    />
                    </div>
                    <div className='miniProfile'>
                    <h1 className='miniName'>Rico</h1>
                    <h1 className='miniJob'>Founder WeekGenz</h1>
                    </div>
                </div>
                <div className='miniBody'>
                    <h1>
                    SMK Multimedia Waskito merupakan SMK terbaik di Tangerang Selatan. Ilmu yang diberikan memenuhi standard industri.
                    </h1>
                </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='miniCard'>
                <div className='miniHead'>
                    <div className='miniImg'>
                    <Image
                        src='/libraries/img/png/testimoni/nico.png'
                        layout='fill'
                        objectFit='cover'
                        className='imgFace'
                        alt=''
                    />
                    </div>
                    <div className='miniProfile'>
                    <h1 className='miniName'>Nico Abel Laia</h1>
                    <h1 className='miniJob'>Founder WeekGenz</h1>
                    </div>
                </div>
                <div className='miniBody'>
                    <h1>
                    SMK Multimedia Waskito memberi saya banyak pengalaman dan pengetahuan mengenai dunia seni digital
                    </h1>
                </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='miniCard'>
                <div className='miniHead'>
                    <div className='miniImg'>
                    <Image
                        src='/libraries/img/png/testimoni/fabian.png'
                        layout='fill'
                        objectFit='cover'
                        className='imgFace'
                        alt=''
                    />
                    </div>
                    <div className='miniProfile'>
                    <h1 className='miniName'>Evans Kurniawan</h1>
                    <h1 className='miniJob'>DKV | Pradita</h1>
                    </div>
                </div>
                <div className='miniBody'>
                    <h1>
                    Amazing jobs by WeekGenz, they help me a lot and they understand what I need, and they give the best.{' '}
                    </h1>
                </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='miniCard'>
                <div className='miniHead'>
                    <div className='miniImg'>
                    <Image
                        src='/libraries/img/png/testimoni/julius.png'
                        layout='fill'
                        objectFit='cover'
                        className='imgFace'
                        alt=''
                    />
                    </div>
                    <div className='miniProfile'>
                    <h1 className='miniName'>Fabian</h1>
                    <h1 className='miniJob'>SI | UBM</h1>
                    </div>
                </div>
                <div className='miniBody'>
                    <h1>
                    Great experiences and awesome service from WeekGenz. My website is fully responsive and very fast.{' '}
                    </h1>
                </div>
                </div>
            </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}
