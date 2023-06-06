import Cardapio from '../../components/Cardapio'
import Header from '../../components/Header'

import pizza from '../../assets/images/image 3.png'

export type Pratos = {
  foto: string
  nome: string
  desc: string
  preco: number
  id: number
}

export const pedido: Pratos[] = [
  {
    id: 1,
    nome: 'Pizza Margherita',
    desc: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: pizza,
    preco: 60.9
  },
  {
    id: 2,
    nome: 'Pizza Margherita',
    desc: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: pizza,
    preco: 60.9
  },
  {
    id: 3,
    nome: 'Pizza Margherita',
    desc: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: pizza,
    preco: 60.9
  },
  {
    id: 4,
    nome: 'Pizza Margherita',
    desc: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: pizza,
    preco: 60.9
  },
  {
    id: 5,
    nome: 'Pizza Margherita',
    desc: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: pizza,
    preco: 60.9
  },
  {
    id: 6,
    nome: 'Pizza Margherita',
    desc: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: pizza,
    preco: 60.9
  }
]

const Perfil = () => {
  const cartItem = pedido.find((i) => i === i)

  return (
    <>
      <Header />
      <Cardapio prato={cartItem!} />
    </>
  )
}

export default Perfil
