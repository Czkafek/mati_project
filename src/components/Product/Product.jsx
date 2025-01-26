import styles from './Product.module.css';

import carImg from '../../assets/Products/car.jpg'
import arrowImg from '../../assets/Products/arrow.png'

export default function Product({name, img, popular}) {
    console.log(img);
    return <div className={styles.product}>
        <h4>{name}</h4>
        <img src={carImg} className={styles.productImg} />
        <p className={styles.details}>
            Szczegóły
            <img src={arrowImg} className={styles.arrow} />    
        </p>
    </div>
}