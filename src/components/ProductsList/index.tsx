import Produto from '../../models/Product'
import ProductCard from '../ProductsCard'
import { List, ProductContainer } from './styles'

export type Props = {
  produtos: Produto[]
}

const ProductList = ({ produtos }: Props) => {
  return (
    <ProductContainer>
      <List>
        {produtos.map((produto) => (
          <ProductCard
            key={produto.id}
            image={produto.image}
            title={produto.title}
            description={produto.description}
          />
        ))}
      </List>
    </ProductContainer>
  )
}

export default ProductList
