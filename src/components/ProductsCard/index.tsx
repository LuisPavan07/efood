import Button from '../Button'
import { ProdutoCard } from './styles'

type ProductProps = {
  image: string
  title: string
  description: string
}

const ProductCard = ({ image, title, description }: ProductProps) => (
  <ProdutoCard>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <Button type="button" title="Adicionar ao carrinho">
      Adicionar ao carrinho
    </Button>
  </ProdutoCard>
)

export default ProductCard
