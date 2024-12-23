import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import ProductList from '../../components/ProductsList'
import HeaderPerfil from '../../components/HeaderPerfil'
import RestaurantBanner from '../../components/RestaurantBanner'
import { Cardapio } from '../Home'

const Perfil = () => {
  const { id } = useParams()
  const [produtos, setProdutos] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [id])

  return (
    <>
      <HeaderPerfil />
      <RestaurantBanner />
      <ProductList produtos={produtos} />
    </>
  )
}

export default Perfil
