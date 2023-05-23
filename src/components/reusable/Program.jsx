import Image from "next/image"

export default function Program() {
  return (
    <section className='program'>
        <div className='programTitle'>
            <h2>Program Studi</h2>
        </div>
        <div className='proTop'>
          <div className='proBox'>
            <div className='proIcoWrap'>
              <div className='proGap'>
                <div className='proIco'>
                  <Image
                          src='/libraries/img/svg/icons/sd.svg'
                          layout='fill'
                          className='object-contain'
                          alt='image-logo'
                      />
                </div>
              </div>
            </div>
            <div className='proText'>
              <h1>SD</h1>
            </div>
          </div>
          <div className='proBox'>
            <div className='proIcoWrap'>
              <div className='proGap'>
                <div className='proIco'>
                  <Image
                          src='/libraries/img/svg/icons/smp.svg'
                          layout='fill'
                          className='object-contain'
                          alt='image-logo'
                      />
                </div>
              </div>
            </div>
            <div className='proText'>
              <h1>SMP</h1>
            </div>
          </div>
          <div className='proBox'>
            <div className='proIcoWrap'>
              <div className='proGap'>
                <div className='proIco'>
                  <Image
                          src='/libraries/img/svg/icons/sma.svg'
                          layout='fill'
                          className='object-contain'
                          alt='image-logo'
                      />
                </div>
              </div>
            </div>
            <div className='proText'>
              <h1>SMA</h1>
            </div>
          </div>
        </div>
        <div className='programSub'>
          <h1>Sekolah Menengah Kejuruan</h1>
        </div>
        <div className='proBot'>
          <div className='proSpread'>
            <div className='proCube'>
              <div className='proIcoWrap'>
                <div className='proGap'>
                  <div className='proIco'>
                    <Image
                          src='/libraries/img/svg/icons/multimedia.svg'
                          layout='fill'
                          className='object-contain'
                          alt='image-logo'
                      />
                  </div>
                </div>
              </div>
              <div className='cubeText'>
                <h1>Multimedia</h1>
              </div>
            </div>
            <div className='proCube'>
              <div className='proIcoWrap'>
                <div className='proGap'>
                  <div className='proIco'>
                    <Image
                          src='/libraries/img/svg/icons/perhotelan.svg'
                          layout='fill'
                          className='object-contain'
                          alt='image-logo'
                      />
                  </div>
                </div>
              </div>
              <div className='cubeText'>
                <h1>Perhotelan</h1>
              </div>
            </div>
          </div>
          <div className='proSpread'>
            <div className='proCube'>
              <div className='proIcoWrap'>
                <div className='proGap'>
                  <div className='proIco'>
                    <Image
                          src='/libraries/img/svg/icons/perkantoran.svg'
                          layout='fill'
                          className='object-contain'
                          alt='image-logo'
                      />
                  </div>
                </div>
              </div>
              <div className='cubeText'>
                <h1>perkantoran</h1>
              </div>
            </div>
            <div className='proCube'>
              <div className='proIcoWrap'>
                <div className='proGap'>
                  <div className='proIco'>
                    <Image
                          src='/libraries/img/svg/icons/perbankan.svg'
                          layout='fill'
                          className='object-contain'
                          alt='image-logo'
                      />
                  </div>
                </div>
              </div>
              <div className='cubeText'>
                <h1>Perbankan</h1>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
