import styles from './Product.module.css';

import carImg from '../../assets/Products/car.jpg'

export default function Product({name, img, popular}) {

    return <div className={styles.product}>
        <h4>{name}</h4>
        <img src={`/src/assets/Products/${img}.png`} className={styles.productImg} />
        <p className={styles.details}>
            Szczegóły
            <img src="/src/assets/Products/arrow.png" className={styles.arrow} />    
        </p>
    </div>
}