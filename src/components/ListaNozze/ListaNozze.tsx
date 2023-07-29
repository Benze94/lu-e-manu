import Section from '../Section/Section'
import './ListaNozze.scss'

const ListaNozze = () => {
  return (
    <Section title={'Lista Nozze'} id="lista-nozze" half>
      <div className="Lista">
        <div className="Lista__text">
          La vostra presenza sarà per noi il dono più grande e bello, ma se
          volete aiutarci a finire di sistemare la nostra casa:
        </div>
        <div className="Lista__info">
          <div>IBAN: IT67V0306952770100000006905</div>
          <div>Beneficiario: Emanuele Rovaris e Lucrezia Ferri</div>
          <div>Causale: Regalo di nozze</div>
        </div>
      </div>
    </Section>
  )
}

export default ListaNozze
