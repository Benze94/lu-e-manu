import './Section.scss'

interface SectionProps {
  title: string
  id: string
  children: JSX.Element
  half?: boolean
}

const Section = ({ title, children, id, half }: SectionProps) => {
  return (
    <div className={`Section${half ? ' Section__half' : ''}`} id={id}>
      <div className="Section__title">{title}</div>
      {children}
    </div>
  )
}

export default Section
