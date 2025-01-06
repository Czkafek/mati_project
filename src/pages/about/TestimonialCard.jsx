import React from 'react';
import styles from './About.module.css';

const TestimonialCard = ({ review }) => {
    return (
        <div className={styles.review}>
            <div className={styles.head}>
                <img src={review.image}  alt="" />
                <p>{review.name}</p>
            </div>
            <img src={`/src/assets/${review.rating}.png`} className={styles.stars} alt="" />
            <p className={styles.text}>{review.text}</p>
        </div>
        );
};

export default TestimonialCard;