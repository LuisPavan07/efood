import { useParams } from 'react-router-dom'

import ProductList from '../../components/ProductsList'
import HeaderPerfil from '../../components/HeaderPerfil'
import RestaurantBanner from '../../components/RestaurantBanner'
import Loader from '../../components/Loader'

import { useGetDishListQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: produtos } = useGetDishListQuery(id!)

  if (!produtos) {
    return <Loader />
  }

  return (
    <>
      <HeaderPerfil />
      <RestaurantBanner />
      <ProductList produtos={produtos} isLoading />
    </>
  )
}

export default Perfil
