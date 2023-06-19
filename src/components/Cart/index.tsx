import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import * as Y from 'yup'

import { usePurchaseMutation } from '../../services/api'

import { RootReducer } from '../../store'
import * as R from '../../store/reducers/cart'

import Tag from '../Tag'

import * as S from './styles'

const Cart = () => {
  const { isOpen, isCart, isDelivery, isPayment, isMessage, items } =
    useSelector((state: RootReducer) => state.cart)

  const [purchase, { data }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const fechar = () => {
    dispatch(R.close())
  }

  const removePedido = (id: number) => {
    dispatch(R.remove(id))
  }

  const openEntrega = () => {
    if (items.length > 0) {
      dispatch(R.closeCart())
      dispatch(R.openDelivery())
    } else {
      alert('Adicione itens ao carrinho!')
    }
  }

  const backCart = () => {
    dispatch(R.closeDelivery())
    dispatch(R.openCart())
  }

  const openPagamento = () => {
    dispatch(R.closeDelivery())
    dispatch(R.openPayment())
  }

  const backEntrega = () => {
    dispatch(R.closePayment())
    dispatch(R.openDelivery())
  }

  const openMessage = () => {
    dispatch(R.message())
    dispatch(R.closePayment())
  }

  const finish = () => {
    dispatch(R.clear())
    dispatch(R.closeMessage())
    dispatch(R.close())
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getTotal = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const form = useFormik({
    initialValues: {
      deliveryName: '',
      deliveryAdress: '',
      deliveryCity: '',
      deliveryCEP: '',
      deliveryNumber: '',
      deliveryComp: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      cardMonth: '',
      cardYear: ''
    },
    validationSchema: Y.object({
      deliveryName: Y.string()
        .min(5, 'Digite o nome completo')
        .required('O campo é obrigatório'),
      deliveryAdress: Y.string()
        .min(5, 'Digite o nome da rua')
        .required('O campo é obrigatório'),
      deliveryCity: Y.string()
        .min(3, 'O nome da cidade de entrega')
        .required('O campo é obrigatório'),
      deliveryCEP: Y.string()
        .min(8, 'Digite seu CEP completo')
        .required('O campo é obrigatório'),
      deliveryNumber: Y.string()
        .min(2, 'Digite o número correto')
        .required('O campo é obrigatório'),
      deliveryComp: Y.string().min(5, 'Digite seu nome completo'),

      cardName: Y.string()
        .min(5, 'Digite o nome impresso no cartão')
        .required('O campo é obrigatório'),
      cardNumber: Y.string()
        .min(16, 'Digite o número impresso no cartão')
        .required('O campo é obrigatório'),
      cardCode: Y.string()
        .min(3, 'Digite o código impresso no verso do cartão')
        .required('O campo é obrigatório'),
      cardMonth: Y.string()
        .min(2, 'Digite o mês de validade impresso no cartão')
        .required('O campo é obrigatório'),
      cardYear: Y.string()
        .min(2, 'Digite o ano de validade impresso no cartão')
        .required('O campo é obrigatório')
    }),
    onSubmit(values) {
      purchase({
        delivery: {
          receiver: values.deliveryName,
          address: {
            city: values.deliveryCity,
            zipCode: values.deliveryCEP,
            description: values.deliveryAdress,
            number: Number(values.deliveryNumber),
            complement: values.deliveryComp
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.cardMonth),
              year: Number(values.cardYear)
            }
          }
        },
        products: items.map((i) => ({
          id: i.id,
          price: i.preco
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

  return (
    <>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={fechar} />
        <S.SideBar className={isCart ? '' : 'closed'}>
          {items.length <= 0 ? (
            <h3 style={{ textAlign: 'center' }}>
              Você não possui itens no seu carrinho!
            </h3>
          ) : (
            <>
              <ul>
                {items.map((i) => (
                  <S.CartItem key={i.id}>
                    <img className="img" src={i.foto} alt="" />
                    <div>
                      <h3>{i.nome}</h3>
                      <p>{formataPreco(i.preco)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removePedido(i.id)}
                    ></button>
                  </S.CartItem>
                ))}
              </ul>
              <S.Valor>
                <p>Valor total:</p>
                <p>{formataPreco(getTotal())}</p>
              </S.Valor>
              <Tag type="button" onClick={openEntrega}>
                Continuar com a entrega
              </Tag>
            </>
          )}
        </S.SideBar>
        <S.SideBar className={isDelivery ? '' : 'closed'}>
          <form onSubmit={form.handleSubmit}>
            <h3>Entrega</h3>
            <S.InputGroup className="margin-top">
              <label htmlFor="deliveryName">Quem irá receber</label>
              <input
                className={checkInputHasError('deliveryName') ? 'error' : ''}
                id="deliveryName"
                name="deliveryName"
                type="text"
                required
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="deliveryAdress">Endereço</label>
              <input
                className={checkInputHasError('deliveryAdress') ? 'error' : ''}
                id="deliveryAdress"
                name="deliveryAdress"
                type="text"
                required
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="deliveryCity">Cidade</label>
              <input
                className={checkInputHasError('deliveryCity') ? 'error' : ''}
                id="deliveryCity"
                name="deliveryCity"
                type="text"
                required
              />
            </S.InputGroup>
            <div>
              <S.InputGroup>
                <label htmlFor="deliveryCEP">CEP</label>
                <InputMask
                  className={
                    checkInputHasError('deliveryName')
                      ? 'error' && 'half'
                      : 'half'
                  }
                  id="deliveryCEP"
                  name="deliveryCEP"
                  type="text"
                  mask="99.999-999"
                  required
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="deliveryNumber">Número</label>
                <input
                  className={
                    checkInputHasError('deliveryName')
                      ? 'error' && 'half'
                      : 'half'
                  }
                  id="deliveryNumber"
                  name="deliveryNumber"
                  type="text"
                  required
                />
              </S.InputGroup>
            </div>
            <S.InputGroup className="margin-bottom">
              <label htmlFor="deliveryComp">Complemento (opcional)</label>
              <input
                className={checkInputHasError('deliveryComp') ? 'error' : ''}
                id="deliveryComp"
                name="deliveryComp"
                type="text"
              />
            </S.InputGroup>
            <Tag type="button" onClick={openPagamento}>
              Continuar com o pagamento
            </Tag>
            <Tag type="button" onClick={backCart}>
              Voltar para o carrinho
            </Tag>
          </form>
        </S.SideBar>
        <S.SideBar className={isPayment ? '' : 'closed'}>
          <form onSubmit={form.handleSubmit}>
            <h3>Pagamento - {formataPreco(getTotal())}</h3>
            <S.InputGroup>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                className={checkInputHasError('cardName') ? 'error' : ''}
                type="text"
                id="cardName"
                name="cardName"
                required
              />
            </S.InputGroup>
            <div>
              <S.InputGroup style={{ width: 228 }}>
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  mask="9999 9999 9999 9999"
                  required
                />
              </S.InputGroup>
              <S.InputGroup style={{ width: 87 }}>
                <label htmlFor="cardCode">CVV</label>
                <InputMask
                  className={checkInputHasError('cardCode') ? 'error' : ''}
                  type="text"
                  id="cardCode"
                  name="cardCode"
                  mask="999"
                  required
                />
              </S.InputGroup>
            </div>
            <div>
              <S.InputGroup>
                <label htmlFor="cardMonth">Mês de vencimento</label>
                <InputMask
                  className={checkInputHasError('cardMonth') ? 'error' : ''}
                  type="text"
                  id="cardMonth"
                  name="cardMonth"
                  mask="99"
                  required
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="cardYear">Ano de vencimento</label>
                <InputMask
                  className={checkInputHasError('cardYear') ? 'error' : ''}
                  type="text"
                  id="cardYear"
                  name="cardYear"
                  mask="99"
                  required
                />
              </S.InputGroup>
            </div>
          </form>
          <Tag type="submit" onClick={openMessage}>
            Finalizar pagamento
          </Tag>
          <Tag type="button" onClick={backEntrega}>
            Voltar para a edição de endereço
          </Tag>
        </S.SideBar>
        <S.SideBar className={isMessage ? '' : 'closed'}>
          <h3>Pedido realizado - ID: {data?.orderId}</h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.{' '}
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p style={{ marginBottom: 24 }}>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <Tag type="button" onClick={finish}>
            Concluir
          </Tag>
        </S.SideBar>
      </S.CartContainer>
    </>
  )
}

export default Cart
