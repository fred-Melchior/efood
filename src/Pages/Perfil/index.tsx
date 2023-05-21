import Cardapio from '../../components/Cardapio'
import Header from '../../components/Header'
import Prato from '../../models/Prato'

import pizza from '../../assets/images/image 3.png'

const italiana: Prato[] = [
  {
    id: 1,
    img: pizza,
    desc: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    nome: 'Pizza Marguerita',
    infos: ['']
  },
  {
    id: 2,
    img: pizza,
    desc: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    nome: 'Pizza Marguerita',
    infos: ['']
  },
  {
    id: 3,
    img: pizza,
    desc: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    nome: 'Pizza Marguerita',
    infos: ['']
  },
  {
    id: 4,
    img: pizza,
    desc: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    nome: 'Pizza Marguerita',
    infos: ['']
  },
  {
    id: 5,
    img: pizza,
    desc: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    nome: 'Pizza Marguerita',
    infos: ['']
  },
  {
    id: 6,
    img: pizza,
    desc: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    nome: 'Pizza Marguerita',
    infos: ['']
  }
]

const Perfil = () => (
  <>
    <Header />
    <Cardapio pratos={italiana} />
  </>
)

export default Perfil
