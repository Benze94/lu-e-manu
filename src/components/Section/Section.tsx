import './Section.scss'

interface SectionProps {
  title: string
  id: string
  children: JSX.Element
}

const Section = ({ title, children, id }: SectionProps) => {
  return (
    <div className="Section" id={id}>
      <div className="Section__title">{title}</div>
      {children}
    </div>
  )
}

export default Section
