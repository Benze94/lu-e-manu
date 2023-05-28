import Section from '../Section/Section'
import './ListaNozze.scss'

const ListaNozze = () => {
  return (
    <Section title={'Lista Nozze'} id="lista-nozze">
      <div className="Lista">
        <div className="Lista__text">
          La vostra presenza sarà per noi il dono più grande e bello, ma se
          volete aiutarci a finire di sistemare la nostra casa:
        </div>
        <div className="Lista__text">IBAN: IT67V0306952770100000006905</div>
      </div>
    </Section>
  )
}

export default ListaNozze
