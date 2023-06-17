import Section from '../Section/Section'
import './Location.scss'

const Location = () => {
  return (
    <Section title="Location" id="location">
      <>
        <div className="Location__location">
          I festeggiamenti continueranno presso
          <br />
          <span className="Location__name">Tenuta Cascina Dei Frati</span>
          <br />
          via Beder 12 - Brusaporto (BG)
        </div>
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5213.023922636625!2d9.773099104598499!3d45.66767044971965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47815b04ba795103%3A0x79388db325e026b0!2sTenuta%20Cascina%20Dei%20Frati!5e0!3m2!1sit!2sit!4v1685283261622!5m2!1sit!2sit"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </>
    </Section>
  )
}

export default Location
