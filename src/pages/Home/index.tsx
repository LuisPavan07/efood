import RestaurantList from '../../components/RestaurantList'
import Restaurante from '../../models/Restaurant'

import hiokiSushi from '../../assets/images/hioki_sushi.png'
import trattotia from '../../assets/images/trattoria.png'
import Hero from '../../components/Hero'

const listaRestaurantes: Restaurante[] = [
  {
    id: 1,
    image: hiokiSushi,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    category: 'Japonesa',
    infos: ['4.9'],
    title: 'Hioki Sushi'
  },
  {
    id: 2,
    image: trattotia,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    category: 'Italiana',
    infos: ['4.6'],
    title: 'La Dolce Vitta Trattoria'
  },
  {
    id: 3,
    image: hiokiSushi,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    category: 'Japonesa',
    infos: ['4.9'],
    title: 'Hioki Sushi'
  },
  {
    id: 4,
    image: trattotia,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    category: 'Italiana',
    infos: ['4.6'],
    title: 'La Dolce Vitta Trattoria'
  },
  {
    id: 5,
    image: hiokiSushi,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    category: 'Japonesa',
    infos: ['4.9'],
    title: 'Hioki Sushi'
  },
  {
    id: 6,
    image: trattotia,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    category: 'Italiana',
    infos: ['4.6'],
    title: 'La Dolce Vitta Trattoria'
  }
]

const Home = () => (
  <>
    <Hero />
    <RestaurantList restaurantes={listaRestaurantes} />
  </>
)

export default Home
