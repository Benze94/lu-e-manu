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
        <div onClick={() => handleClickScroll('main-picture')}>Lu e Manu</div>
        <div onClick={() => handleClickScroll('cerimonia')}>Cerimonia</div>
        <div onClick={() => handleClickScroll('location')}>Location</div>
        <div onClick={() => handleClickScroll('lista-nozze')}>Lista nozze</div>
      </div>
      <div className="Navbar__separator"></div>
    </div>
  )
}

export default Navbar
