import Tag from '../Tag'
import { Title, Card, Infos, Description, TitleCard, Star } from './styles'
import starRate from '../../assets/images/star_rate.svg'
import Button from '../Button'

export type Props = {
  id: number
  title: string
  image: string
  description: string
  category: string
  infos: string[]
  rating: number
}

const RestaurantCard = ({
  id,
  title,
  image,
  description,
  infos,
  rating
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos className="infoTag">
      {infos.map((info) => (
        <Tag key={id}>{info}</Tag>
      ))}
    </Infos>
    <div>
      <TitleCard>
        <Title>{title}</Title>
        <div>
          <span className="rate">{rating}</span>
          <Star src={starRate} alt="Star icon" />
        </div>
      </TitleCard>
      <Description>{description}</Description>
      <Button
        to={`/produto/${id}`}
        type="link"
        title="Clique aqui para acessar"
      >
        Saiba mais
      </Button>
    </div>
  </Card>
)

export default RestaurantCard
