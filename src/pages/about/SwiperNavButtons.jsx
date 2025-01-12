import styles from './About.module.css';
import React from 'react';
import arrow1 from '../../assets/arrow1.png';
import arrow2 from '../../assets/arrow2.png';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

export const SwiperNavButtons = () => {
    const swiper = useSwiper();

    return (
        <div className={styles.navigationButtons}>
            <button onClick={() => swiper.slidePrev()} className={styles.arrowButton}>
                <img src={arrow1} alt="" />
            </button>
            <button onClick={() => swiper.slideNext()} className={styles.arrowButton}>
                <img src={arrow2} alt="" />
            </button>
        </div>
    );
};