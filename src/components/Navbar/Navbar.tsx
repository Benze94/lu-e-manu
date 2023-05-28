import './Navbar.scss'

const Navbar = () => {
  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="Navbar">
      <div className="Navbar__buttons">
        <div onClick={() => handleClickScroll('header')}>Lu e Manu</div>
        <div onClick={() => handleClickScroll('cerimonia')}>Cerimonia</div>
        <div onClick={() => handleClickScroll('')}>Domitilla</div>
        <div onClick={() => handleClickScroll('')}>Puzzilla</div>
      </div>
      <div className="Navbar__separator"></div>
    </div>
  )
}

export default Navbar
