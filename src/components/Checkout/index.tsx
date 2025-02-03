import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'

import Button from '../Button'
import Card from '../Card'

import { usePurchaseMutation } from '../../services/api'

import { Row, InputGroup, CardForm } from './styles'
import { open, clear } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

export const Checkout = ({ onClose }: { onClose: () => void }) => {
  const [payWith, setPayWith] = useState(false)
  const [isOpenCart, setIsOpenCart] = useState(false)
  const [purchase, { isLoading, isSuccess, data }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      cep: '',
      complement: '',
      number: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O endereço é inválido')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'O nome precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'Somente 9 caracteres')
        .max(9, 'Somente 9 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string(),
      cardOwner: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'Deve ter no mínimo 16 números')
        .max(19, 'Deve ter no máximo 16 números')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'Somente 3 dígitos')
        .max(3, 'Somente 3 dígitos')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(1, 'Ao menos 1 número')
        .max(2, 'Máximo de 2 números')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'Somente 2 números')
        .max(2, 'Somente 2 números')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const handleToPayment = () => {
    form.setTouched({
      receiver: true,
      address: true,
      city: true,
      cep: true,
      complement: true,
      number: true,
      cardOwner: true,
      cardNumber: true,
      cardCode: true,
      expiresMonth: true,
      expiresYear: true
    })

    const isDeliveryValid =
      !form.errors.receiver &&
      !form.errors.address &&
      !form.errors.city &&
      !form.errors.cep &&
      !form.errors.number &&
      form.values.receiver !== '' &&
      form.values.address !== '' &&
      form.values.city !== '' &&
      form.values.cep !== '' &&
      form.values.number !== ''

    if (isDeliveryValid) {
      setPayWith(true)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const openCart = () => {
    dispatch(open())
  }

  const handleToConclude = () => {
    setIsOpenCart(true)
    onClose()
    navigate('/')
  }

  const handleToBack = () => {
    setIsOpenCart(true)
    onClose()
    openCart()
  }

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <div>
      {!isOpenCart && isSuccess && data ? (
        <Card>
          <>
            <CardForm>
              <Row>
                <h2>Pedido realizado: {data.orderId}</h2>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço fornecido
                </p>
                <p>
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras
                </p>
                <p>
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                </p>
                <p>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite
                </p>
              </Row>
              <Button title="Concluir" type="button" onClick={handleToConclude}>
                Concluir
              </Button>
            </CardForm>
          </>
        </Card>
      ) : (
        <Card>
          <>
            <CardForm onSubmit={form.handleSubmit}>
              {!payWith ? (
                <>
                  <Row>
                    <h2>Entrega</h2>
                    <InputGroup>
                      <label htmlFor="receiver">Quem irá receber</label>
                      <input
                        id="receiver"
                        type="text"
                        name="receiver"
                        value={form.values.receiver}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('receiver') ? 'error' : ''
                        }
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="address">Endereço</label>
                      <input
                        id="address"
                        type="text"
                        name="address"
                        value={form.values.address}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('address') ? 'error' : ''}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="city">Cidade</label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={form.values.city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('city') ? 'error' : ''}
                      />
                    </InputGroup>
                    <div className="row-group">
                      <InputGroup>
                        <label htmlFor="cep">CEP</label>
                        <InputMask
                          id="cep"
                          type="text"
                          name="cep"
                          value={form.values.cep}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('cep') ? 'error' : ''}
                          mask="99999-999"
                        />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="number">Número</label>
                        <input
                          id="number"
                          type="number"
                          name="number"
                          value={form.values.number}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('number') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                    </div>
                    <InputGroup>
                      <label>Complemento (opcional)</label>
                      <input type="text" />
                    </InputGroup>
                  </Row>
                  <Button
                    title="Continuar com o pagamento"
                    type="submit"
                    onClick={handleToPayment}
                  >
                    Continuar com o pagamento
                  </Button>
                  <Button
                    title="Voltar ao carrinho"
                    type="button"
                    onClick={handleToBack}
                  >
                    Voltar ao Carrinho
                  </Button>
                </>
              ) : (
                <>
                  <Row>
                    <h2>
                      Pagamento - Valor a pagar
                      <span> R$ 190,00</span>
                    </h2>
                    <InputGroup>
                      <label htmlFor="cardOwner">Nome no cartão</label>
                      <input
                        id="cardOwner"
                        type="text"
                        name="cardOwner"
                        value={form.values.cardOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardOwner') ? 'error' : ''
                        }
                      />
                    </InputGroup>
                    <div className="row-group">
                      <InputGroup>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <InputMask
                          id="cardNumber"
                          type="text"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardNumber') ? 'error' : ''
                          }
                          mask="9999 9999 9999 9999"
                        />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="cardCode">CVV</label>
                        <InputMask
                          id="cardCode"
                          type="text"
                          name="cardCode"
                          value={form.values.cardCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardCode') ? 'error' : ''
                          }
                          mask="999"
                        />
                      </InputGroup>
                    </div>
                    <div className="row-group">
                      <InputGroup>
                        <label htmlFor="expiresMonth">Mês de expiração</label>
                        <InputMask
                          id="expiresMonth"
                          type="text"
                          name="expiresMonth"
                          value={form.values.expiresMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expiresMonth') ? 'error' : ''
                          }
                          mask="99"
                        />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="expiresYear">Ano de expiração</label>
                        <InputMask
                          id="expiresYear"
                          type="text"
                          name="expiresYear"
                          value={form.values.expiresYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expiresYear') ? 'error' : ''
                          }
                          mask="99"
                        />
                      </InputGroup>
                    </div>
                  </Row>
                  <Button
                    title="Continuar com o pagamento"
                    type="submit"
                    onClick={form.handleSubmit}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
                  </Button>
                  <Button
                    title="Voltar ao carrinho"
                    type="button"
                    onClick={() => setPayWith(false)}
                  >
                    Voltar a entrega
                  </Button>
                </>
              )}
            </CardForm>
          </>
        </Card>
      )}
    </div>
  )
}

export default Checkout
