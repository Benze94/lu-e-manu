import './Section.scss'

interface SectionProps {
  title: string
  children: JSX.Element
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="Section">
      <div className="Section__title">{title}</div>
      {children}
    </div>
  )
}

export default Section
