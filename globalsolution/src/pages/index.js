import styles from "./home.module.css";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1>Caminhos para um Futuro Mais Verde</h1>
          <p>
            Descubra práticas sustentáveis, tecnologias verdes e metas de emissões de carbono zero. Junte-se a nós para construir um futuro mais saudável.
          </p>
          <button className={styles.cta}>Saiba Mais</button>
        </div>
        <img src="/images/banner.webp" alt="Futuro Verde"/>
      </section>

      {/* Práticas Sustentáveis */}
      <section className={styles.section}>
        <h2>Práticas Sustentáveis</h2>
        <p>Explore formas de reduzir resíduos e adotar eficiência energética.</p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="/images/reducao-residuos.webp" alt="Reciclagem" />
            <h3>Redução de Resíduos</h3>
          </div>
          <div className={styles.card}>
            <img src="/images/eficiencia-energetica.webp" alt="LED" />
            <h3>Eficiência Energética</h3>
          </div>
          <div className={styles.card}>
            <img src="/images/recursos-renovaveis.webp" alt="Solar" />
            <h3>Uso de Recursos Renováveis</h3>
          </div>
        </div>
      </section>

      {/* Tecnologias Verdes */}
      <section className={styles.section}>
        <h2>Tecnologias Verdes</h2>
        <p>Saiba mais sobre soluções tecnológicas sustentáveis.</p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="/images/paineis-solares.webp" alt="Painéis Solares" />
            <h3>Painéis Solares</h3>
          </div>
          <div className={styles.card}>
            <img src="/images/turbinas-eolicas.webp" alt="Turbinas Eólicas" />
            <h3>Turbinas Eólicas</h3>
          </div>
          <div className={styles.card}>
            <img src="/images/carros-eletricos.webp" alt="Veículos Elétricos" />
            <h3>Veículos Elétricos</h3>
          </div>
        </div>
      </section>

      {/* Metas de Emissões */}
      <section className={styles.section}>
        <h2>Metas de Emissões de Carbono Zero</h2>
        <p>Entenda as metas globais para alcançar a sustentabilidade.</p>
        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <h3>2015 - Acordo de Paris</h3>
            <p>Compromisso global para limitar o aquecimento global.</p>
          </div>
          <div className={styles.timelineItem}>
            <h3>2030 - Neutralidade Parcial</h3>
            <p>Metas intermediárias para reduzir emissões em 55%.</p>
          </div>
          <div className={styles.timelineItem}>
            <h3>2050 - Neutralidade Total</h3>
            <p>Objetivo de emissões líquidas zero para países desenvolvidos.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2024 GreenFuture - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
