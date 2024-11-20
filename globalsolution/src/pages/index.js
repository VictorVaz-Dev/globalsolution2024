import styles from "./home.module.css";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);  // Estado para controlar o modal do chatbot
  const [modalContent, setModalContent] = useState("");
  const [messages, setMessages] = useState([{ text: "Olá, como posso ajudar você?", sender: "bot" }]);
  const [userMessage, setUserMessage] = useState("");

  // Função para abrir o modal de informações
  const handleShow = (content) => {
    const formattedContent = content.replace(/\n/g, "<br />"); // Substitui \n por <br />
    setModalContent(formattedContent);
    setIsModalOpen(true);
  };
  
  

  // Função para fechar o modal de informações
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Função para enviar a mensagem no chatbot
  const handleSendMessage = () => {
    if (userMessage.trim()) {
      setMessages([...messages, { text: userMessage, sender: "user" }]);
      setUserMessage(""); // Limpa o campo de entrada
      // Simulação de resposta do bot
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Estou aqui para ajudar!", sender: "bot" }
        ]);
      }, 1000);
    }
  };

  // Função para abrir o chatbot
  const openChatbot = () => {
    setIsChatbotOpen(true);
  };

  // Função para fechar o chatbot
  const closeChatbot = () => {
    setIsChatbotOpen(false);
  };

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
        <img src="/images/banner.webp" alt="Futuro Verde" />
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
        <div className={styles.timeline}>
          {/* 2015 - Acordo de Paris */}
          <div className={styles.timelineItem}>
            <h3>2015 - Acordo de Paris</h3>
            <button
              className={styles.moreInfoButton}
              onClick={() =>
                handleShow(
                  "Mais informações sobre o Acordo de Paris:\n\n" +
                  "1. Limitar o aumento da temperatura global a menos de 2°C, com esforços para 1,5°C.\n\n" +
                  "2. Estabelecer Contribuições Nacionalmente Determinadas (NDCs) para redução de emissões.\n\n" +
                  "3. Financiamento de US$ 100 bilhões anuais até 2020 para apoiar países em desenvolvimento.\n\n" +
                  "4. Revisão regular das metas a cada 5 anos para aumento da ambição.\n\n" +
                  "5. Primeiro acordo climático universal, com participação de 196 países."
                )
              }
            >
              Saiba Mais
            </button>
          </div>

          {/* 2030 - Neutralidade Parcial */}
          <div className={styles.timelineItem}>
            <h3>2030 - Neutralidade Parcial</h3>
            <button
              className={styles.moreInfoButton}
              onClick={() =>
                handleShow(
                  "Metas intermediárias para 2030:\n\n" +
                  "1. Reduzir emissões de gases de efeito estufa em 55% em relação aos níveis de 1990 (União Europeia).\n\n" +
                  "2. Aumentar a participação das energias renováveis para pelo menos 32%.\n\n" +
                  "3. Melhorar a eficiência energética em pelo menos 32,5%.\n\n" +
                  "4. Implementar estratégias de economia circular e transporte sustentável.\n\n" +
                  "5. Apoiar países em desenvolvimento com recursos técnicos e financeiros."
                )
              }
            >
              Saiba Mais
            </button>
          </div>

          {/* 2050 - Neutralidade Total */}
          <div className={styles.timelineItem}>
            <h3>2050 - Neutralidade Total</h3>
            <button
              className={styles.moreInfoButton}
              onClick={() =>
                handleShow(
                  "Meta de Neutralidade Total em 2050:\n\n" +
                  "1. Alcançar emissões líquidas zero globalmente, compensando emissões com remoção de carbono.\n\n" +
                  "2. Descarbonização completa de setores como energia, transporte e agricultura.\n\n" +
                  "3. Uso de tecnologias de captura e armazenamento de carbono (CCS).\n\n" +
                  "4. Reflorestamento em larga escala para captura de carbono natural.\n\n" +
                  "5. Preservar e restaurar ecossistemas para manter a biodiversidade e o equilíbrio ambiental."
                )
              }
            >
              Saiba Mais
            </button>
          </div>
        </div>
      </section>

      {/* Modal - Conteúdo (informações) */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
            <div className={styles.modalContent}>
              <h2>Informações</h2>
              <p dangerouslySetInnerHTML={{ __html: modalContent }} />
            </div>
          </div>
        </div>
      )}

      {/* Modal - Chatbot */}
      {isChatbotOpen && (
        <div className={styles.chatbotModalOverlay} onClick={closeChatbot}>
          <div className={styles.chatbotModal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeChatbot}>
              &times;
            </button>
            <div className={styles.chatbotContent}>
              <h2>Chat com o Assistente</h2>
              <div className={styles.chatbotMessages}>
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={msg.sender === "bot" ? styles.chatbotMessageBot : styles.chatbotMessageUser}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
              <input 
                type="text" 
                placeholder="Digite sua mensagem..." 
                className={styles.chatbotInput} 
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)} 
              />
              <button className={styles.chatbotSendMessage} onClick={handleSendMessage}>Enviar</button>
            </div>
          </div>
        </div>
      )}

      {/* Botão Flutuante */}
      <button 
        className={styles.floatingButton} 
        onClick={openChatbot}
      >
        💬
      </button>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2024 GreenFuture - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
