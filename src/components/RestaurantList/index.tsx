import Restaurante from '../../models/Restaurant'
import RestaurantCard from '../RestaurantCard'
import { Container, List } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

const RestaurantList = ({ restaurantes }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {restaurantes.map((restaurante) => (
            <RestaurantCard
              key={restaurante.id}
              title={restaurante.title}
              image={restaurante.image}
              description={restaurante.description}
              category={restaurante.category}
              infos={restaurante.infos}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantList
