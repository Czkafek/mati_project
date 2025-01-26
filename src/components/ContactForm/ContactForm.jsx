import styles from './ContactForm.module.css';
import { useState, useRef } from 'react';
import validator from 'validator';
import emailjs from '@emailjs/browser';
import arrowImg from '../../assets/Products/arrow.png'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        email: '',
        temat: '',
        mes: '',
        error: '',
        success: false,
    });

    const messageRef = useRef();

    const isValidEmail = (email) => {
        return validator.isEmail(email);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleInput = (e) => {
        const textarea = e.target;
        textarea.style.paddingBottom = '0px';
        textarea.style.height = '32px'; // Resetuj wysokość
        textarea.style.height = `${textarea.scrollHeight}px`; // Dopasuj do zawartości
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.email.length === 0 || !isValidEmail(formData.email)) {
            setFormData((prevData) => ({
                ...prevData,
                error: "Nie prawidłowy email",
            }));
            return;
        }
        if (formData.temat.length < 3) {
            setFormData((prevData) => ({
                ...prevData,
                error: "Temat powinien mieć minimum 3 znaki",
            }));
            return;
        }
        if (formData.mes.length < 10 || formData.mes.length > 1000) {
            setFormData((prevData) => ({
                ...prevData,
                error: "Wiadomośc powinna mieć od 10 do 1000 znaków",
            }));
            return;
        }

        setFormData((prevData) => ({
            ...prevData,
            error: "",
            success: true,
        }));

        emailjs.sendForm('service_id', 'template_id', e.target, 'public_key');

        console.log('Form submitted');
        console.log('Email:', formData.email);
        console.log('Temat:', formData.temat);
        console.log('Wiadomość:', formData.mes);
        console.log('Error:', formData.error);
    };

    return (
        <div className={styles.ContactForm}>
            <h2>Masz jakieś pytania?</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Temat"
                    name="temat"
                    value={formData.temat}
                    onChange={handleInputChange}
                />
                <textarea
                    ref={messageRef}
                    placeholder="Wiadomość"
                    name="mes"
                    value={formData.mes}
                    onChange={handleInputChange}
                    onInput={handleInput}
                />
                {formData.error && <p className={styles.errorMes} name="error">{formData.error}</p>}
                {formData.success && <p className={styles.successMes} name="error">Wysłano email!</p>}
                <button type="submit" className={styles.submitButton}>
                    Wyślij
                    <img src={arrowImg} className={styles.arrow} alt="arrow" />
                </button>
            </form>
        </div>
    );
}
