import italianPerfil from '../../assets/images/Italian_perfil.png'
import { BannerContainer } from './styles'

const RestaurantBanner = () => (
  <BannerContainer style={{ backgroundImage: `url(${italianPerfil})` }}>
    <div className="container">
      <p>Italiana</p>
      <h2>La Dolce Vita Trattoria</h2>
    </div>
  </BannerContainer>
)

export default RestaurantBanner
