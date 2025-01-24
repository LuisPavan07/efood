import Button from '../Button'
import Card from '../Card'
import { Row, InputGroup, Form } from './styles'

export const Checkout = () => (
  <Card>
    <>
      <Form>
        <h2>Entrega</h2>
        <Row>
          <InputGroup>
            <label>Quem irá receber</label>
            <input type="text" />
          </InputGroup>
          <InputGroup>
            <label>Endereço</label>
            <input type="text" />
          </InputGroup>
          <InputGroup>
            <label>Cidade</label>
            <input type="text" />
          </InputGroup>
          <div className="row-group">
            <InputGroup>
              <label>CEP</label>
              <input type="text" />
            </InputGroup>
            <InputGroup>
              <label>Número</label>
              <input type="text" />
            </InputGroup>
          </div>
          <InputGroup>
            <label>Complemento (opcional)</label>
            <input type="text" />
          </InputGroup>
        </Row>
        <Button title="Continuar com o pagamento" type="submit">
          Continuar com o pagamento
        </Button>
        <Button title="Voltar ao carrinho" type="button">
          Voltar ao Carrinho
        </Button>
      </Form>
    </>
  </Card>
)

export default Checkout
