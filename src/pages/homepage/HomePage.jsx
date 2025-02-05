import { Link } from 'react-router-dom';
import { APIProvider } from '@vis.gl/react-google-maps';

import happy_woman_img from '../../assets/happy_woman.webp';
import arrowImg from '../../assets/Products/arrow.png'
import MatiFullLogo from '../../assets/logos/MatiFullLogo2.png'
import styles from './HomePage.module.css'

import InfiniteSlider from '../../components/InfiniteSlider/InfiniteSlider';
import Product from '../../components/Product/Product';
import ContactForm from '../../components/ContactForm/ContactForm';
// console.log(import.meta.env.VITE_API_KEY);

function HomePage() {

    const Products = [
        { name: "Samochód", imgName:  "car", popular: true},
        { name: "Samochód", imgName:  "car", popular: true},
        { name: "Samochód", imgName:  "car", popular: true},
        { name: "Samochód", imgName:  "car", popular: true},
        { name: "Samochód", imgName:  "car", popular: false},
        { name: "Samochód", imgName:  "car", popular: false},
        { name: "Samochód", imgName:  "car", popular: false},
        { name: "Samochód", imgName:  "car", popular: false},
        { name: "Samochód", imgName:  "car", popular: false},
        { name: "Samochód", imgName:  "car", popular: false},
        { name: "Samochód", imgName:  "car", popular: false},
        { name: "Samochód", imgName:  "car", popular: false},
    ];

    return<>
        <div className={styles.heroContainer}>
            <img src={happy_woman_img} className={styles.heroImg} alt="photo" loading='lazy' />
            <div className={styles.heroContent}>
                <div className={styles.heroContentText}>
                    <h1 className={styles.heroTitle}>Zaufaj doświadczeniu</h1>
                    <h4 className={styles.heroSubTitle}>- Najlepsze ubezpieczenia dla ciebie</h4>
                </div>
                <Link to="/kontakt">
                    <button className={styles.primaryButton}>Skontaktuj się</button>
                </Link>
            </div>
        </div>
        <div className={styles.coopContainer}>
            <h3>Współpracujemy z najlepszymi!</h3>
            <InfiniteSlider loading='lazy'/>
        </div>
        <div className={styles.products}>
            <h2>Poznaj naszą ofertę:</h2>
            <div className={styles.productsGrid}>
                {Products.map((product, index) => {
                    return <Product key={index} name={product.name} img={product.imgName} popular={product.popular}/>
                })}
            </div>
        </div>
        <div className={styles.contact}>
                <h2>Tu nas znajdziesz</h2>
                <div className={styles.contactText}>
                    <p>Godziny otwarcia:</p>
                    <p>pon. - pt., <span className={styles.noWrap}>10:00 - 18:00</span></p>
                </div>
                <div className={styles.contactText}>
                    <p>Adres:</p>
                    <p>Marii Konopnickiej 2, 95-070 Aleksandrów Łódzki</p>
                </div>
                <div className={styles.contactNumbers}>
                    <div className={styles.contactText}>
                        <p>Irek:</p>
                        <p>+48 123 456 789</p>
                    </div>
                    <div className={styles.contactText}>
                        <p>Sylwia:</p>
                        <p>+48 123 456 789</p>
                    </div>
                    <div className={styles.contactText}>
                        <p>Mateusz:</p>
                        <p>+48 123 456 789</p>
                    </div>
                </div>
                <div className={styles.contactImages}>                        
                    <div className={styles.contactImg}></div>
                    <div className={styles.contactImg}></div>
                </div>
        </div>
        <div className={styles.hook}>
            <img src={MatiFullLogo} className={styles.logo} loading='lazy' />
            <div className={styles.hookContent}>
                <h2>Poznaj nas!</h2>
                <p>W MATI wierzymy, że doświadczenie, indywidualne podejście i rodzinna atmosfera stanowią fundament solidnych relacji z naszymi klientami. Przez ponad dwie dekady angażujemy się w zapewnianie kompleksowej ochrony dla naszych klientów, co sprawia, że jesteśmy partnerem, któremu możesz zaufać.</p>
                <Link to="/onas" style={{ textDecoration: 'none' }}>
                    <p className={styles.hookDetails}>
                        Szczegóły
                        <img src={arrowImg} className={styles.arrow} loading='lazy'/>    
                    </p>
                </Link>
            </div>
        </div>
        <ContactForm/>
    </>
};

export default HomePage;