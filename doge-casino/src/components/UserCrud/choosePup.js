import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";
import { Pagination, Lazy} from "swiper";
import doge1 from '../../static/doge.PNG';
import doge2 from '../../static/doge2.PNG';
import doge3 from '../../static/doge3.PNG';
import doge4 from '../../static/doge4.PNG';
import doge5 from '../../static/doge5.PNG';
import './choosePup.css'

export default () => {
    return (
        <>
            <div className="page_wrap" id='choosePup'>
                <Swiper
                    pagination={{
                    dynamicBullets: true,
                    }}
                    modules={[Pagination, Lazy]}
                    className="dogeSwiper"
                >
                    <SwiperSlide>
                        <div className="DogeSelectionWrap">
                            <h3>OG Doge</h3>
                            <br/>
                            <img src={doge1} className='dogePortrait' loading='lazy'/>
                            <br/>
                            <button>Select</button>
                        </div>  
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="DogeSelectionWrap">
                            <h3>Collie Doge</h3>
                            <br/>
                            <img src={doge2} className='dogePortrait' loading='lazy'/>
                            <br/>
                            <button>Select</button>
                        </div>  
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="DogeSelectionWrap">
                            <h3>Mutt Doge</h3>
                            <br/>
                            <img src={doge3} className='dogePortrait' loading='lazy'/>
                            <br/>
                            <button>Select</button>
                        </div>  
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="DogeSelectionWrap">
                            <h3>Aussie Doge</h3>
                            <br/>
                            <img src={doge4} className='dogePortrait' loading='lazy'/>
                            <br/>
                            <button>Select</button>
                        </div>  
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="DogeSelectionWrap">
                            <h3>Spaniel Doge</h3>
                            <br/>
                            <img src={doge5} className='dogePortrait' loading='lazy'/>
                            <br/>
                            <button>Select</button>
                        </div>  
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}