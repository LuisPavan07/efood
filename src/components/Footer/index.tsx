import { Link } from 'react-router-dom'
import { Container, Logo, SocialMedia } from './styles'
import logo from '../../assets/images/logo.svg'
import Instagram from '../../assets/images/Instagram.svg'
import Facebook from '../../assets/images/Facebook.svg'
import Twitter from '../../assets/images/Twitter.svg'

const Footer = () => (
  <Container>
    <div>
      <Logo>
        <Link to="/">
          <img src={logo} alt="EFood logo" />
        </Link>
      </Logo>
      <SocialMedia>
        <a href="/">
          <img src={Instagram} alt="Instagram-icon" />
        </a>
        <a href="/">
          <img src={Facebook} alt="Facebook-icon" />
        </a>
        <a href="/">
          <img src={Twitter} alt="Twitter-icon" />
        </a>
      </SocialMedia>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br />
        dos produtos é toda do estabelecimento contratado.
      </p>
    </div>
  </Container>
)

export default Footer
