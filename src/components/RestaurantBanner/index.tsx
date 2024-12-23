import { useEffect, useState } from 'react'
import { BannerContainer, Title } from './styles'
import { Restaurant } from '../../pages/Home'

const RestaurantBanner = () => {
  const [restaurantGuide, setRestaurantGuide] = useState<Restaurant>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantGuide(res))
  }, [])

  return (
    <BannerContainer
      style={{ backgroundImage: `url(${restaurantGuide?.capa})` }}
    >
      <div className="container">
        <p>{restaurantGuide?.tipo}</p>
        <Title>{restaurantGuide?.titulo}</Title>
      </div>
    </BannerContainer>
  )
}
export default RestaurantBanner
