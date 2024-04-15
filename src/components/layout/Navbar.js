import styles from './Navbar.module.css'
import logo from '../../../public/PASSOS.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Image className={styles.logo} src={logo} width={80} alt='Logo do Portfólio de Paulo André'/>
                <div className={styles.menu}>
                    <Link className={styles.opcoes} href={'/'}>Home</Link>
                    <Link className={styles.opcoes} href={'/habilidades'}>Habilidades</Link>
                    <Link className={styles.opcoes} href={'/projetos'}>Projetos</Link>
                    <Link className={styles.opcoes} href={'/'}>Contatos</Link>
                </div>
            </div>
        </nav>
    )
}