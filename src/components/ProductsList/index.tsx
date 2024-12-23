import { Cardapio } from '../../pages/Home'
import ProductCard from '../ProductsCard'
import { List, ProductContainer } from './styles'

export type Props = {
  produtos: Cardapio[]
}

const ProductList = ({ produtos }: Props) => {
  return (
    <ProductContainer>
      <List>
        {produtos.map((produto) => (
          <ProductCard
            key={produto.id}
            id={produto.id}
            foto={produto.foto}
            nome={produto.nome}
            descricao={produto.descricao}
          />
        ))}
      </List>
    </ProductContainer>
  )
}

export default ProductList
