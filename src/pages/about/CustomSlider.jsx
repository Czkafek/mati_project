import styles from './About.module.css';
import React, { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const CustomSlider = () => {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
    }, []);
  
    const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
    }, []);
  
    return (
      <div>
        <Swiper ref={sliderRef}>
          <SwiperSlide />
          ...slides
          <SwiperSlide />
        </Swiper>
        <div className="prev-arrow" onClick={handlePrev} />
        <div className="next-arrow" onClick={handleNext} />
      </div>
    )
}

export default CustomSlider;