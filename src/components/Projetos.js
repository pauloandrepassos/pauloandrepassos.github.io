import Image from "next/image"
import imagemProjeto1 from '../../public/projeto1.png'
import styles from './projetos.module.css'
import { FaCode } from "react-icons/fa"
import Link from "next/link"

export default function Projetos({nome, descricao, imagem, url_projeto}) {
    return (
        <div className={styles.card_projeto}>
            <div className={styles.imagem_projeto}>
                <Image src={imagem} width={400} height={1} alt="Imagem do projeto"/>
            </div>
            <div className={styles.projeto_info}>
                <h3>{nome}</h3>
                <p>{descricao}</p>
                <Link href={`${url_projeto}`} target="_blank" className={styles.icon}><FaCode/></Link>
            </div>
        </div>
    )
}