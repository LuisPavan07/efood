import Hero from '../../components/Hero'
import Loader from '../../components/Loader'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantGuideQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantGuide } = useGetRestaurantGuideQuery()

  if (restaurantGuide) {
    return (
      <>
        <Hero />
        <RestaurantList restaurantes={restaurantGuide} />
      </>
    )
  }

  return <Loader />
}

export default Home
