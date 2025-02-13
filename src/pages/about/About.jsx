import { Link } from 'react-router-dom';

import styles from './About.module.css';
import happy_family_img from '../../assets/happy_family.webp';
import interludeImg from '../../assets/interlude.webp';
import MatiFullLogo from '../../assets/logos/MatiFullLogo2.png'
import irekImg from '../../assets/irek2.webp'
import sylwiaImg from '../../assets/sylwia2.webp'
import mateuszImg from '../../assets/mateusz.webp'
import { reviews } from './reviews';
import TestimonialCard from './TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperNavButtons } from './SwiperNavButtons';

function About() {

    return <>
        <div className={styles.heroContainer}>
            <img src={happy_family_img} className={styles.heroImg} loading='lazy' alt="photo" />
            <div className={styles.heroContent}>
                <div className={styles.heroContentText}>
                    <h1 className={styles.heroTitle}>Ubezpieczenie dopasowane</h1>
                    <h1 className={styles.heroTitle}>do Twoich potrzeb</h1>
                    <h4 className={styles.heroSubTitle}>- Najlepsze ubezpieczenia dla ciebie</h4>
                </div>
                <Link to="/kontakt">
                    <button className={styles.primaryButton}>Skontaktuj się</button>
                </Link>
            </div>
        </div>
        <div className={styles.hook}>
            <img src={MatiFullLogo} loading='lazy' className={styles.logo} />
            <div className={styles.hookContent}>
                <h3>Poznaj nas!</h3>
                <p>W MATI wierzymy, że doświadczenie, indywidualne podejście i rodzinna atmosfera stanowią fundament solidnych relacji z naszymi klientami. Przez ponad dwie dekady angażujemy się w zapewnianie kompleksowej ochrony dla naszych klientów, co sprawia, że jesteśmy partnerem, któremu możesz zaufać.</p>
            </div>
        </div>
        <div className={styles.teamContainer}>
            <h3>Poznaj nasz zespół</h3>
            <div className={styles.person}>
                <img src={irekImg} className={styles.img} loading='lazy' />
                <div className={styles.content}>
                    <h4>Irek</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                </div>
            </div>
            <div className={styles.person}>
                <img src={sylwiaImg} className={styles.img} loading='lazy' />
                <div className={styles.content}>
                    <h4>Sylwia</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                </div>
            </div>
            <div className={styles.person}>
                <img src={mateuszImg} className={styles.img} loading='lazy' />
                <div className={styles.content}>
                    <h4>Mateusz</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                </div>
            </div>
        </div>
        <div className={styles.interludeContainer}>
            <img src={interludeImg} loading='lazy' alt="" />
            <h3>Lata doświadczenia</h3>
            <p>Co roku nasz zespół uczęszcza w przeróżnych kursach, warsztatach, zajęciach, aby zwiększać swoje kompetencje w celu możliwości udzielenia profesjonalnej pomocy klientowi w każdej sytuacji, gdzie często te sytuacje są skomplikowane. Co roku nasz zespół uczęszcza w przeróżnych kursach, warsztatach, zajęciach, aby zwiększać swoje kompetencje w celu możliwości udzielenia profesjonalnej pomocy klientowi w każdej sytuacji, gdzie często te sytuacje są skomplikowane.</p>
        </div>
        <div className={styles.testimonialContainer}>
            <div className={styles.sliderContent}>
                <div className={styles.childSliderContent}>
                    <h3>Nie wierzysz nam na słowo?</h3>
                    <h2>
                        <span className={styles.breakLine}>- sprawdź, co mówią </span>
                        <span className={styles.noWrap}>nasi klienci</span>
                    </h2>
                </div>
                {/*<Link to="/kontakt">
                    <button className={styles.primaryButton}>Skontaktuj się</button>
                </Link>*/}  
            </div>
            <Swiper className={styles.slider}
                loop={true}
                modules={[Navigation]}
                breakpoints={{
                    // Default (smallest screens) - 1 slide
                    0: {
                      slidesPerView: 1,
                    },
                    // On screens wider than 1520px - 3 slides
                    1520: {
                      slidesPerView: 3,
                    },
                  }}
                spaceBetween={0}
                navigation={false}
                >
                { reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                        <TestimonialCard  review={review} />
                    </SwiperSlide>
                ))}
                <SwiperNavButtons/>
            </Swiper>
        </div>
    </>
};

export default About;