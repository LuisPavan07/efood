import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestaurantGuideQuery } from '../../services/api'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  titulo: string
  id: number
  destacado?: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

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

  return <h4>Carregando...</h4>
}

export default Home
