import italianPerfil from '../../assets/images/Italian_perfil.png'
import { BannerContainer } from './styles'

const RestaurantBanner = () => (
  <BannerContainer style={{ backgroundImage: `url(${italianPerfil})` }}>
    <p>Italiana</p>
    <h2>La Dolce Vita Trattoria</h2>
  </BannerContainer>
)

export default RestaurantBanner
