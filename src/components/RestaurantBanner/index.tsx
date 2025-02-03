import { BannerContainer, Title } from './styles'
import { useParams } from 'react-router-dom'
import { useGetRestaurantBannerQuery } from '../../services/api'
import Loader from '../Loader'

const RestaurantBanner = () => {
  const { id } = useParams()
  const { data: restaurantGuide } = useGetRestaurantBannerQuery(id!)

  if (!restaurantGuide) {
    return <Loader />
  }

  return (
    <>
      <BannerContainer
        style={{ backgroundImage: `url(${restaurantGuide?.capa})` }}
      >
        <div className="container">
          <p>{restaurantGuide?.tipo}</p>
          <Title>{restaurantGuide?.titulo}</Title>
        </div>
      </BannerContainer>
    </>
  )
}
export default RestaurantBanner
