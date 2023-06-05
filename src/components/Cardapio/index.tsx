import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { open, add } from '../../store/reducers/cart'

import { Lista, Modal, ModalContent, ModalDiv } from './styles'
import CardPerfil from '../CardPerfil'
import Tag from '../Tag'
import { Pratos, pedido } from '../../Pages/Perfil'

type Props = {
  prato: Pratos
}

const cartItem = pedido.find((i) => i == i)

const Cardapio = ({ prato }: Props) => {
  const [modal, setModal] = useState({
    estaVisivel: false
  })

  const abreModal = () =>
    setModal({
      estaVisivel: true
    })

  const fechaModal = () =>
    setModal({
      estaVisivel: false
    })

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
    dispatch(add(prato))
    fechaModal()
  }

  return (
    <div className="container">
      <Lista>
        {pedido.map((p) => (
          <li key={p.id} onClick={abreModal}>
            <CardPerfil
              foto={p.foto}
              desc={p.desc}
              nome={p.nome}
              preco={p.preco}
              id={p.id}
            />
          </li>
        ))}
      </Lista>
      <Modal className={modal.estaVisivel ? 'visivel' : ''}>
        <ModalContent className="overlay">
          <ModalDiv className="container" key={cartItem?.id}>
            <img src={cartItem?.foto} alt="" />
            <div>
              <h3>{cartItem?.nome}</h3>
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
                opção para qualquer ocasião.
              </p>
              <p>Serve: de 2 a 3 pessoas</p>
              <Tag size="big" onClick={openCart}>
                Adicionar ao carrinho
              </Tag>
            </div>
            <button className="close" type="button" onClick={fechaModal} />
          </ModalDiv>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Cardapio
