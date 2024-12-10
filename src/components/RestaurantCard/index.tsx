import Tag from '../Tag'
import { Title, Card, Infos, Description, TitleCard, Star } from './styles'
import starRate from '../../assets/images/star_rate.svg'
import Button from '../Button'

export type Props = {
  title: string
  image: string
  description: string
  category: string
  infos: string[]
}

const RestaurantCard = ({
  title,
  image,
  category,
  description,
  infos
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Tag>{category}</Tag>
    <div>
      <TitleCard>
        <Title>{title}</Title>
        <Infos>
          {infos.map((info) => (
            <span key={info}>{info}</span>
          ))}
          <Star src={starRate} alt="Star icon" />
        </Infos>
      </TitleCard>
      <Description>{description}</Description>
      <Button to="/Produtos" type="link" title="Clique aqui para acessar">
        Saiba mais
      </Button>
    </div>
  </Card>
)

export default RestaurantCard
