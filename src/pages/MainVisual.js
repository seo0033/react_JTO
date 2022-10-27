import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

const MainVisual = () => {
    const [idxn, setIdxn] = useState();
    const MS = useRef(null);

    return (
        <section className='MainVisual'>
            <Swiper className='MainSlide'
                direction={"vertical"}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                onSlideChange={it => setIdxn(it.realIndex)}
                ref={MS}
            >
                {
                    // word.map((sl, idx) => {
                    //     return (
                    //         <SwiperSlide key={idx}>
                    //             <SlideItm>
                    //                 <div className='tit'>{sl.tit}</div>
                    //                 <div className='con'>{sl.con}</div>
                    //                 <div className='des'>{sl.des}</div>
                    //             </SlideItm>
                    //         </SwiperSlide>
                    //     )
                    // })
                }
            </Swiper>
        </section>
    )
}

export default MainVisual