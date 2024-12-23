import { useState } from 'react'
import Button from '../Button'
import { Modal, ModalContent, ModalOverlay, ProdutoCard } from './styles'

import marguerita from '../../assets/images/marguerita.svg'
import close from '../../assets/images/close.png'

type ProductProps = {
  id: number
  foto: string
  nome: string
  descricao: string
}

const ProductCard = ({ foto, nome, descricao }: ProductProps) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  return (
    <>
      <ProdutoCard>
        <div>
          <img src={foto} alt={nome} />
          <h3>{nome}</h3>
          <p>{descricao}</p>
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
          <header>
            <img
              src={close}
              alt="Ícone de fechar"
              onClick={() => setModalEstaAberto(false)}
            />
          </header>
          <div className="product">
            <div>
              <img src={marguerita} />
            </div>
            <div>
              <h4>{nome}</h4>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião. <br /> <br />
                Serve: de 2 a 3 pessoas
              </p>
              <Button type="button" title="clique para adicionar ao carrinho">
                Adicionar ao carrinho - R$ 60,90
              </Button>
            </div>
          </div>
        </ModalContent>
        <ModalOverlay onClick={() => setModalEstaAberto(false)} />
      </Modal>
    </>
  )
}

export default ProductCard
