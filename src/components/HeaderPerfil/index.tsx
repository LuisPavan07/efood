import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import BannerPerfil from '../../assets/images/Banner_perfil.svg'
import { Header, Links } from './styles'

const HeaderPerfil = () => (
  <Header style={{ backgroundImage: `url(${BannerPerfil})` }}>
    <nav>
      <Links>
        <li>
          <Link to="/">Restaurantes</Link>
        </li>
        <li>
          <img src={logo} alt="efood" />
        </li>
        <li>
          <a href="#">0 - produto(s) no carrinho</a>
        </li>
      </Links>
    </nav>
  </Header>
)

export default HeaderPerfil
