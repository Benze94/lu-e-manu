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
        <div className="Cerimonia__chiave"></div>
      </div>
    </Section>
  )
}

export default Cerimonia
