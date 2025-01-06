import styles from './Footer.module.css';

export default function Footer() {

    return(
        <div className={styles.footerContainer}>
            <div className={styles.footer}>
                <div className={styles.footerSection}>
                    <h5>Ubezpieczenia</h5>
                    <hr />
                    <p>Samochód</p>
                    <p>Samochód</p>
                    <p>Samochód</p>
                    <p>Samochód</p>
                    <p>Samochód</p>
                    <p>Samochód</p>
                </div>
                <div className={styles.footerSection}>
                    <h5>Kontakt</h5>
                    <hr />
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
                    <div className={styles.contactText}>
                        <p>Adres:</p>
                        <p>Marii Konopnickiej 2, 95-070 <span className={styles.noWrap}>Aleksandrów Łódzki</span></p>
                    </div>
                </div>
            </div>
            <div className={styles.copyrights}>
                <p>© 2024 Mati Ubezpieczenie S. C.</p>
            </div>
        </div>
    );
}