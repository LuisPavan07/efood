import { useParams } from 'react-router-dom'

import ProductList from '../../components/ProductsList'
import HeaderPerfil from '../../components/HeaderPerfil'
import RestaurantBanner from '../../components/RestaurantBanner'
import { useGetDishListQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: produtos } = useGetDishListQuery(id!)

  if (!produtos) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderPerfil />
      <RestaurantBanner />
      <ProductList produtos={produtos} />
    </>
  )
}

export default Perfil
