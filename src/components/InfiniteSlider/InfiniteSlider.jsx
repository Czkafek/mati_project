import styles from './InfiniteSlider.module.css';
import { useState, useEffect } from 'react';

import alianzLogo from '../../assets/wspolpracujacy/alianz.png';
import link4Logo from '../../assets/wspolpracujacy/link4.png';
import pzuLogo from '../../assets/wspolpracujacy/pzu.png';
import wartaLogo from '../../assets/wspolpracujacy/warta.png';
import Marquee from 'react-fast-marquee';

export default function InfiniteSlider() {

    const [gradientWidth, setGradientWidth] = useState(150);

    useEffect(() => {
        const updateGradientWidth = () => {
            if (window.innerWidth < 768)
                setGradientWidth(50)
            else
                setGradientWidth(100)
        }

        updateGradientWidth();

        window.addEventListener("resize", updateGradientWidth);

        return () => {
            window.removeEventListener("resize", updateGradientWidth);
        }

    }, []);


    return <Marquee className={styles.slider} autoFill="true" pauseOnHover="true" gradient="true" gradientWidth={gradientWidth}>
        <div>
            <img src={alianzLogo} className={`${styles.slider_item} ${styles.slider_item1}`} loading='lazy' />
        </div>
        <div>
            <img src={link4Logo} className={`${styles.slider_item} ${styles.slider_item2}`} loading='lazy' />
        </div>
        <div>
            <img src={pzuLogo} className={`${styles.slider_item} ${styles.slider_item3}`} loading='lazy' />
        </div>
        <div>
            <img src={wartaLogo} className={`${styles.slider_item} ${styles.slider_item4}`} loading='lazy' />
        </div>
            </Marquee>
}