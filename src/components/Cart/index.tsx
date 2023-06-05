import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import Tag from '../Tag'
import { CartContainer, CartItem, Overlay, SideBar, Valor } from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removePedido = (id: number) => {
    dispatch(remove(id))
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

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((i) => (
            <CartItem key={i.id}>
              <img className="img" src={i.foto} alt="" />
              <div>
                <h3>{i.nome}</h3>
                <p>{formataPreco(i.preco)}</p>
              </div>
              <button type="button" onClick={() => removePedido(i.id)}></button>
            </CartItem>
          ))}
        </ul>
        <Valor>
          <p>Valor total:</p>
          <p>{formataPreco(getTotal())}</p>
        </Valor>
        <Tag>Continuar com a entrega</Tag>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
