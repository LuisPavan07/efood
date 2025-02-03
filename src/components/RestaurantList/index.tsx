import RestaurantCard from '../RestaurantCard'
import { Container, List } from './styles'

export type Props = {
  restaurantes: Restaurant[]
}

const RestaurantList = ({ restaurantes }: Props) => {
  const getInfos = (restaurantes: Restaurant) => {
    const infos = [restaurantes.tipo]
    if (restaurantes.destacado) {
      infos.push('Destaque da Semana')
    }

    return infos
  }

  return (
    <Container>
      <div className="container">
        <List>
          {restaurantes.map((restaurante) => (
            <RestaurantCard
              key={restaurante.id}
              id={restaurante.id}
              title={restaurante.titulo}
              image={restaurante.capa}
              description={restaurante.descricao}
              category={restaurante.tipo}
              infos={getInfos(restaurante)}
              rating={restaurante.avaliacao}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantList
