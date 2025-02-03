import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

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
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'Post',
        body
      })
    })
  })
})

export const {
  useGetRestaurantGuideQuery,
  useGetDishListQuery,
  useGetRestaurantBannerQuery,
  usePurchaseMutation
} = api

export default api
