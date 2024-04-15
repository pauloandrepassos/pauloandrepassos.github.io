import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.contact}>
                    <h3>Contato</h3>
                    <div className={styles.contact_list}>
                        <Link className={styles.itens} href={'https://github.com/pauloandrepassos'}><FaGithub /></Link>
                        <Link className={styles.itens} href={'https://www.instagram.com/paulo_andre_passos_/'}><FaInstagram /></Link>
                        <Link className={styles.itens} href={'/'}><FaLinkedin /></Link>
                    </div>
                </div>
                <div className={styles.copyRight}>
                    <p>&copy; 2024 Seu Nome. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}