import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Cardapio, Restaurant } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantGuide: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getDishList: builder.query<Cardapio[], string>({
      query: (id) => `restaurantes/${id}`,
      transformResponse: (response: { cardapio: Cardapio[] }) =>
        response.cardapio
    }),
    getRestaurantBanner: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const {
  useGetRestaurantGuideQuery,
  useGetDishListQuery,
  useGetRestaurantBannerQuery
} = api

export default api
