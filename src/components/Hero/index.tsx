import { Link } from 'react-router-dom'
import { BannerImg } from './styles'
import logo from '../../assets/images/logo.svg'
import BannerImagem from '../../assets/images/Banner.svg'

const Hero = () => (
  <BannerImg style={{ backgroundImage: `url(${BannerImagem})` }}>
    <div className="container">
      <Link to="/">
        <img src={logo} alt="efood" />
      </Link>
      <p>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </p>
    </div>
  </BannerImg>
)

export default Hero
