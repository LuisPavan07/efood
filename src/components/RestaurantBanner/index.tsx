import { useEffect, useState } from 'react'
import { BannerContainer, Title } from './styles'
import { Restaurant } from '../../pages/Home'
import { useParams } from 'react-router-dom'

const RestaurantBanner = () => {
  const { id } = useParams()
  const [restaurantGuide, setRestaurantGuide] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurantGuide(res))
  }, [id])

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
