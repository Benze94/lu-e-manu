import Navbar from '../../components/Navbar/Navbar'
import MainPicture from '../../components/MainPicture/MainPicture'
import './Homepage.scss'
import Header from '../../components/Header/Header'

const Homepage = () => {
  return (
    <div className="Homepage">
      <Header />
      <Navbar />
      <MainPicture />
    </div>
  )
}

export default Homepage
