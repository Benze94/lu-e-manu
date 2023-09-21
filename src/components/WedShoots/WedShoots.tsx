import Section from '../Section/Section'
import './WedShoots.scss'

const WedShoots = () => {
  return (
    <Section title={'WedShoots'} id="wed-shoots" half>
      <div className="WedShoots">
        <div className="WedShoots__text">
          Scarica l'
          <a
            href="https://play.google.com/store/apps/details?id=net.bodas.android.wedshoots"
            target="_blank"
            rel="noreferrer"
          >
            app
          </a>
          , inserisci il codice dell'album <b>IT108ffe8c</b> e carica le tue
          foto!
          {/* <a
            href="https://www.matrimonio.com/web/lu-e-manu/wedshoots-8"
            target="_blank"
            rel="noreferrer"
          >
            WedShoots
          </a> */}
        </div>
        {/* <div className="WedShoots__info"></div> */}
      </div>
    </Section>
  )
}

export default WedShoots
