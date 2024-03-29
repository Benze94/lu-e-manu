import Navbar from '../../components/Navbar/Navbar'
import MainPicture from '../../components/MainPicture/MainPicture'
import './Homepage.scss'
import Header from '../../components/Header/Header'
import Cerimonia from '../../components/Cerimonia/Cerimonia'
import Location from '../../components/Location/Location'
import ListaNozze from '../../components/ListaNozze/ListaNozze'
import WedShoots from '../../components/WedShoots/WedShoots'

const Homepage = () => {
  return (
    <div className="Homepage">
      <Header />
      <Navbar />
      <MainPicture />
      <Cerimonia />
      <Location />
      <ListaNozze />
      <WedShoots />
    </div>
  )
}

export default Homepage
