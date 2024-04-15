import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/layout/Navbar";
import pa_img from '../../public/pa_img.jpg'
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className={styles.home}>
      <Navbar />
      <section className={styles.section}>
        <Image src={pa_img} width={350}/>
        <div className={styles.info}>
          <h1>PAULO ANDRÉ</h1>
          <h2>Estudante do curso de Análise e Desenvolvimento de Sistemas</h2>
          <p>Eu sou Paulo André dos Reis Passos, um estudante de Análise e Desenvolvimento de Sistemas em busca de oportunidades para aprender e contribuir para o mundo da tecnologia. Estou animado para aplicar meu conhecimento em projetos práticos e adquirir experiência no desenvolvimento de software.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
