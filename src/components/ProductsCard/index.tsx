import { useState } from 'react'
import Button from '../Button'
import { Modal, ModalContent, ModalOverlay, ProdutoCard } from './styles'
import close from '../../assets/images/close.png'
import { Cardapio } from '../../pages/Home'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type ProductProps = {
  produto: Cardapio
  descricaoCompleta: string
}

const ProductCard = ({ produto, descricaoCompleta }: ProductProps) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(produto))
    dispatch(open())
  }

  return (
    <>
      <ProdutoCard>
        <div>
          <img src={produto.foto} alt={produto.nome} />
          <h3>{produto.nome}</h3>
          <p>{produto.descricao}</p>
          <Button
            onClick={() => setModalEstaAberto(true)}
            type="button"
            title="Clique para ver mais detalhes do produto"
          >
            Mais detalhes
          </Button>
        </div>
      </ProdutoCard>
      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <div key={produto.id}>
            <header>
              <img
                src={close}
                alt="Ícone de fechar"
                onClick={() => setModalEstaAberto(false)}
              />
            </header>
            <div className="product">
              <div>
                <img src={produto.foto} />
              </div>
              <div>
                <h4>{produto.nome}</h4>
                <p>
                  {descricaoCompleta} <br /> <br />
                  Serve: de {produto.porcao}
                </p>
                <Button
                  type="button"
                  title="clique para adicionar ao carrinho"
                  onClick={addToCart}
                >
                  {`Adicionar ao carrinho - R$ ${produto.preco}`}
                </Button>
              </div>
            </div>
          </div>
        </ModalContent>
        <ModalOverlay onClick={() => setModalEstaAberto(false)} />
      </Modal>
    </>
  )
}

export default ProductCard
