import Cardapio from '../../components/Cardapio'
import Header from '../../components/Header'

import pizza from '../../assets/images/image 3.png'

export const pedido: Pratos[] = [
  {
    id: 1,
    nome: 'Pizza Margherita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: pizza,
    preco: 60.9,
    porcao: '2 a 3 pessoas'
  },
  {
    id: 2,
    nome: 'Pizza Margherita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: pizza,
    preco: 60.9,
    porcao: '2 a 3 pessoas'
  },
  {
    id: 3,
    nome: 'Pizza Margherita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: pizza,
    preco: 60.9,
    porcao: '2 a 3 pessoas'
  },
  {
    id: 4,
    nome: 'Pizza Margherita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: pizza,
    preco: 60.9,
    porcao: '2 a 3 pessoas'
  },
  {
    id: 5,
    nome: 'Pizza Margherita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: pizza,
    preco: 60.9,
    porcao: '2 a 3 pessoas'
  },
  {
    id: 6,
    nome: 'Pizza Margherita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: pizza,
    preco: 60.9,
    porcao: '2 a 3 pessoas'
  }
]

const Perfil = () => {
  const cartItem = pedido.find((i) => i === i)
  if (!cartItem) {
    return <h3>Carregando</h3>
  }
  return (
    <>
      <Header />
      <Cardapio prato={cartItem} />
    </>
  )
}

export default Perfil
