import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'

export type Restaurant = {
  titulo: string
  id: number
  destacado?: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [restaurantGuide, setRestaurantGuide] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantGuide(res))
  }, [])

  return (
    <>
      <Hero />
      <RestaurantList restaurantes={restaurantGuide} />
    </>
  )
}

export default Home
