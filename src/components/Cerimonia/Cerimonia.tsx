import Section from '../Section/Section'
import './Cerimonia.scss'

const Cerimonia = () => {
  return (
    <Section title="Lucrezia ed Emanuele" id="cerimonia">
      <div className="Cerimonia">
        <div className="Cerimonia__text Cerimonia__text--primary">
          Annunciano con gioia il loro matrimonio
          <br />
          che sarà celebrato presso
        </div>
        <div className="Cerimonia__text Cerimonia__text--secondary">
          Santuario S. Maria Annunciata
          <br />
          via XI Febbraio - Verdello (BG)
        </div>
        <div className="Cerimonia__text Cerimonia__text--primary">
          Sabato 30 settembre 2023 alle ore 11
        </div>
        <iframe
          title="santuario"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.0831259585734!2d9.628389276265018!3d45.60897347107673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47814ef4da0dcd29%3A0x77adcb9006ce13cb!2sSantuario%20Santa%20Maria%20Annunciata!5e0!3m2!1sit!2sit!4v1690618992185!5m2!1sit!2sit"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="Cerimonia__chiave"></div>
      </div>
    </Section>
  )
}

export default Cerimonia
