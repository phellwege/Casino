import React from 'react';
import './selectAGame.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";
import { Pagination, Lazy} from "swiper";
export default () => {
    return (
        <>
            <div className="selectGameWrapper">
            <Swiper
                    loop={true}
                    pagination={{
                    dynamicBullets: true,
                    }}
                    modules={[Pagination, Lazy]}
                    className="gameSwiper"
                >
                    <SwiperSlide>
                        <div className="GameSelectionWrap">
                            <h3>Black Jack</h3>
                            <br/>
                            {/* <img src={} className='dogePortrait' loading='lazy'/> */}
                            <br/>
                            <button>Select</button>
                        </div>  
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="GameSelectionWrap">
                            <h3>Slots</h3>
                            <br/>
                            {/* <img src={} className='dogePortrait' loading='lazy'/> */}
                            <br/>
                            <button>Select</button>
                        </div>  
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}