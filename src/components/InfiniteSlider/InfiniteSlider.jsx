import styles from './InfiniteSlider.module.css';
import { useState, useEffect } from 'react';

import alianzLogo from '../../assets/wspolpracujacy/alianz.png';
import link4Logo from '../../assets/wspolpracujacy/link4.png';
import pzuLogo from '../../assets/wspolpracujacy/pzu.png';
import wartaLogo from '../../assets/wspolpracujacy/warta.png';
import compensaLogo from '../../assets/wspolpracujacy/compensa.png'
import dallboggLogo from '../../assets/wspolpracujacy/dallbogg.png'
import ergohestiaLogo from '../../assets/wspolpracujacy/ergohestia.webp'
import generaliLogo from '../../assets/wspolpracujacy/generali.webp'
import hdiLogo from '../../assets/wspolpracujacy/hdi.png'
import interRiskLogo from '../../assets/wspolpracujacy/InterRisk.avif'
import leadenhallLogo from '../../assets/wspolpracujacy/leadenhall.svg'
import mtuLogo from '../../assets/wspolpracujacy/mtu.webp'
import proamaLogo from '../../assets/wspolpracujacy/proama.png'
import trastiLogo from '../../assets/wspolpracujacy/trasti.svg'
import tuwLogo from '../../assets/wspolpracujacy/tuw.png'
import tuzLogo from '../../assets/wspolpracujacy/tuz.webp'
import uniqaLogo from '../../assets/wspolpracujacy/uniqa.png'
import wienerLogo from '../../assets/wspolpracujacy/wiener.png'
import youcandriveLogo from '../../assets/wspolpracujacy/youcandrive.svg'
import interLogo from '../../assets/wspolpracujacy/inter.png'
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


    return <Marquee className={styles.slider} autoFill="true" gradient="true" gradientWidth={gradientWidth}>
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
        <div>
            <img src={compensaLogo} className={`${styles.slider_item} ${styles.slider_item5}`} loading='lazy' />
        </div>
        <div>
            <img src={dallboggLogo} className={`${styles.slider_item} ${styles.slider_item6}`} loading='lazy' />
        </div>
        <div>
            <img src={ergohestiaLogo} className={`${styles.slider_item} ${styles.slider_item7}`} loading='lazy' />
        </div>
        <div>
            <img src={generaliLogo} className={`${styles.slider_item} ${styles.slider_item8}`} loading='lazy' />
        </div>
        <div>
            <img src={hdiLogo} className={`${styles.slider_item} ${styles.slider_item9}`} loading='lazy' />
        </div>
        <div>
            <img src={interRiskLogo} className={`${styles.slider_item} ${styles.slider_item10}`} loading='lazy' />
        </div>
        <div>
            <img src={leadenhallLogo} className={`${styles.slider_item} ${styles.slider_item11}`} loading='lazy' />
        </div>
        <div>
            <img src={mtuLogo} className={`${styles.slider_item} ${styles.slider_item12}`} loading='lazy' />
        </div>
        <div>
            <img src={proamaLogo} className={`${styles.slider_item} ${styles.slider_item13}`} loading='lazy' />
        </div>
        <div>
            <img src={trastiLogo} className={`${styles.slider_item} ${styles.slider_item14}`} loading='lazy' />
        </div>
        <div>
            <img src={tuwLogo} className={`${styles.slider_item} ${styles.slider_item15}`} loading='lazy' />
        </div>
        <div>
            <img src={tuzLogo} className={`${styles.slider_item} ${styles.slider_item16}`} loading='lazy' />
        </div>
        <div>
            <img src={uniqaLogo} className={`${styles.slider_item} ${styles.slider_item17}`} loading='lazy' />
        </div>
        <div>
            <img src={wienerLogo} className={`${styles.slider_item} ${styles.slider_item18}`} loading='lazy' />
        </div>
        <div>
            <img src={youcandriveLogo} className={`${styles.slider_item} ${styles.slider_item19}`} loading='lazy' />
        </div>
        <div>
            <img src={interLogo} className={`${styles.slider_item} ${styles.slider_item20}`} loading='lazy' />
        </div>
            </Marquee>
}