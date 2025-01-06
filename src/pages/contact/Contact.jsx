import styles from './Contact.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';

export default function Contact() {
    return(<>
        <h1 className={styles.header}>Kontakt</h1>
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
        <ContactForm/>
    </>
    );
};
