import styles from './Navbar.module.css'
import {Link, useLocation} from 'react-router-dom';
import Dropdown from './dropdown/Dropdown.jsx'
import { useEffect, useState } from 'react';

import burgerMenu from '../../assets/burgerMenu.svg'
import Logo from '../../assets/logos/temporaryLogo.png';
import moreIcon from '../../assets/MoreButton.svg'

function Navbar() {

    const location = useLocation();
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        if (dropdown) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
    }, [dropdown]);

    return(
        <div>
            <div className={styles.computer}>
                <Link to="/" className={styles.logoContainer}>
                    <img src={Logo} className={styles.logo} alt="logo" />
                </Link>
                <div className={styles.navigation}>
                    <div className={styles.verticalLine}></div>
                    {
                    /*
                    <div className={styles.dropDownContainer}>
                        <p className={styles.link}>Ubezpieczenia</p>
                        <div className={styles.dropDown}>
                            <div className={styles.dropDownCategory}>
                                <h4 className={styles.dropDownTitle}>Majątek</h4>
                                <Link to="/ubezpieczenie" className={styles.link}>Ubezpieczenie</Link>
                                <Link to="/ubezpieczenie" className={styles.link}>Ubezpieczenie</Link>
                                <Link to="/ubezpieczenie" className={styles.link}>Ubezpieczenie</Link>
                                <Link to="/ubezpieczenie" className={styles.link}>Ubezpieczenie</Link>
                            </div>   
                            <div className={styles.dropDownCategory}>
                                <h4 className={styles.dropDownTitle}>Majątek</h4>
                                <Link to="/ubezpieczenie" className={styles.link}>Ubezpieczenie</Link>
                                <Link to="/ubezpieczenie" className={styles.link}>Ubezpieczenie</Link>
                                <Link to="/ubezpieczenie" className={styles.link}>Ubezpieczenie</Link>
                                <Link to="/ubezpieczenie" className={styles.link}>Ubezpieczenie</Link>
                            </div> 
                            <div className={styles.dropDownCategory}>
                                <h4 className={styles.dropDownTitle}>Majątek</h4>
                                <Link to="/ubezpieczenie" className={styles.link}>Ubezpieczenie</Link>
                                <Link to="/ubezpieczenie" className={styles.link}>Ubezpieczenie</Link>
                                <Link to="/ubezpieczenie" className={styles.link}>Ubezpieczenie</Link>
                                <Link to="/ubezpieczenie" className={styles.link}>Ubezpieczenie</Link>
                            </div> 
                            <div className={styles.dropDownCategory}>
                                <h4 className={styles.dropDownTitle}>Majątek</h4>
                                <Link to="/ubezpieczenie" className={styles.link}>Ubezpieczenie</Link>
                                <Link to="/ubezpieczenie" className={styles.link}>Ubezpieczenie</Link>
                                <Link to="/ubezpieczenie" className={styles.link}>Ubezpieczenie</Link>
                                <Link to="/ubezpieczenie" className={styles.link}>Ubezpieczenie</Link>
                            </div> 
                        </div>
                    </div>
                    */}
                    <p className={styles.link} onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} >
                        Ubezpieczenia
                    </p>
                    { dropdown && <Dropdown onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} /> }
                    <Link to="/onas" className={styles.link}>O nas</Link>
                    <Link to="/kontakt" className={styles.link}>Kontakt</Link>

                    

                </div>
            </div>
                
            <div className={styles.phone}>
                <Link to="/" className={styles.logoContainer}>
                    <img src={Logo} className={styles.logo} alt="logo" />
                </Link>
                <div className={styles.burgerMenuContainer} onClick={() => {setDropdown(!dropdown); console.log(dropdown)}}>
                    <img src={burgerMenu} className={styles.burgerMenu} alt="burger menu" />
                </div>
                { dropdown && <Dropdown/> }
            </div>
        </div>
    );
}

export default Navbar;