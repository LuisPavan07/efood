import { Cardapio } from '../../pages/Home'
import ProductCard from '../ProductsCard'
import { List, ProductContainer } from './styles'

export type Props = {
  produtos: Cardapio[]
}

const ProductList = ({ produtos }: Props) => {
  const getDescricaoCurta = (descricao: string) => {
    if (descricao.length > 165) {
      return descricao.slice(0, 162) + '...'
    }
    return descricao
  }

  return (
    <ProductContainer>
      <List>
        {produtos.map((produto) => (
          <ProductCard
            key={produto.id}
            produto={{
              ...produto,
              descricao: getDescricaoCurta(produto.descricao)
            }}
            descricaoCompleta={produto.descricao}
          />
        ))}
      </List>
    </ProductContainer>
  )
}

export default ProductList
