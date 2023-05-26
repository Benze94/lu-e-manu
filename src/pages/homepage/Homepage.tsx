import Navbar from '../../components/Navbar/Navbar'
import MainPicture from '../../components/MainPicture/MainPicture'
import './Homepage.scss'
import Header from '../../components/Header/Header'
import Cerimonia from '../../components/Cerimonia/Cerimonia'

const Homepage = () => {
  return (
    <div className="Homepage">
      <Header />
      <Navbar />
      <MainPicture />
      <Cerimonia />
    </div>
  )
}

export default Homepage
