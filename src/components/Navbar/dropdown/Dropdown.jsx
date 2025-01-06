import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styles from './Dropdown.module.css'
import dropdownItems from './dropdownItems.jsx'
import arrow from '../../../assets/arrow.svg'


export default function Dropdown({ onMouseEnter, onMouseLeave }) {

    if(window.innerWidth > 850)
        return <div className={styles.container} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className={styles.dropdown}>
                {
                    dropdownItems.map(item => {
                        return <div className={styles.dropdownCategory} key={item.id}>
                                <h4 className={styles.dropdownTitle}>{item.title}</h4>
                                {item.items.map( subelement => {
                                    return <Link to={subelement.path} className={styles.link} key={subelement.name}>{subelement.name}</Link>
                                })}
                            </div>
                    })
                }
            </div>
        </div>
    else
        return <div className={styles.container}>
            <div className={styles.pages}>
                <Link to="/onas" className={styles.pageLink}>
                    O nas
                    <img src={arrow} className={styles.arrow} alt="arrow" />
                </Link>
                <Link to="/kontakt" className={styles.pageLink}>
                    Kontakt
                    <img src={arrow} className={styles.arrow} alt="arrow" />
                </Link>
            </div>
            <div className={styles.dropdown}>
                
            
            {
                dropdownItems.map(item => {
                    return <div className={styles.dropdownCategory} key={item.id}>
                            <h4 className={styles.dropdownTitle}>{item.title}</h4>
                            {item.items.map( subelement => {
                                return <Link to={subelement.path} className={styles.link} key={subelement.name}>{subelement.name}</Link>
                            })}
                        </div>
                })
            }
            </div>
        </div>
    
    
        
}