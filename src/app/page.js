import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/layout/Navbar";
import pa_img from '../../public/pa_img.jpg'
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { FaJsSquare, FaPython, FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaUsers } from 'react-icons/fa';
import Projetos from "@/components/Projetos";


export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <Container>
        <section className={styles.intro}>
          <Image src={pa_img} width={350} alt="Foto de Paulo André" />
          <div className={styles.info}>
            <h1>PAULO ANDRÉ</h1>
            <h2>Estudante do curso de Análise e Desenvolvimento de Sistemas</h2>
            <p>Eu sou Paulo André dos Reis Passos, um estudante de Análise e Desenvolvimento de Sistemas em busca de oportunidades para aprender e contribuir para o mundo da tecnologia. Estou animado para aplicar meu conhecimento em projetos práticos e adquirir experiência no desenvolvimento de software.</p>
          </div>
        </section>

        <div className={styles.borda_separacao} />

        <section className={styles.habilidades}>
          <h2>Habilidades</h2>
          <div className={styles.lista_habilidades}>
            <FaJsSquare className={styles.jsIcon} />
            <FaPython className={styles.pythonIcon} />
            <FaHtml5 className={styles.htmlIcon} />
            <FaCss3 className={styles.cssIcon} />
            <FaReact className={styles.reactIcon} />
            <FaNodeJs className={styles.nodeIcon} />
            <FaGitAlt className={styles.gitIcon} />
          </div>
        </section>

        <div className={styles.borda_separacao} />

        <section className={styles.projetos}>
          <h2>Projetos</h2>
          <Projetos
            nome={'Agenda aí'}
            descricao={'Projeto em desenvolvimento durante as disciplicas de Projeto Intergrador. Trata-se de um sestema para agendamento de lanches em lanchonetes e cantinas escolars, que permite o cliente realizar  pela plataforma o agendamento com antecedencia do lanche que ele irá comprar.'}
            imagem={'https://res.cloudinary.com/dhaxh4qdu/image/upload/v1713211991/hv6p5kklhwmqowef96wg.png'}
            url_projeto={'https://github.com/ifpi-picos/agenda-ai-front-end'}
          />
        </section>
      </Container>
      <Footer />
    </div>
  );
}
