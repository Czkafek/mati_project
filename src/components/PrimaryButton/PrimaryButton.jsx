import styles from './PrimaryButton.module.css';
import { Link } from 'react-router-dom';
export default function PrimaryButton(props) {

    const propsStyles = {
        fontSize: props.fontSize,
    }

    return <Link to={props.path}>
        <button style={propsStyles} className={styles.primaryButton}>{props.content}</button>
    </Link>
}