import { useState } from 'react'
import CardPerfil from '../CardPerfil'
import { Lista, Modal, ModalContent, ModalDiv } from './styles'
import { Restaurante } from '../../Pages/Home'
import Tag from '../Tag'

import pizza from '../../assets/images/image 3.png'

type Props = {
  restaurante: Restaurante[]
}

const Cardapio = ({ restaurante }: Props) => {
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

  return (
    <div className="container">
      <Lista>
        <li onClick={abreModal}>
          <CardPerfil
            foto={pizza}
            nome="Pizza Marguerita"
            desc="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          />
        </li>
        <li onClick={abreModal}>
          <CardPerfil
            foto={pizza}
            nome="Pizza Marguerita"
            desc="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          />
        </li>
        <li onClick={abreModal}>
          <CardPerfil
            foto={pizza}
            nome="Pizza Marguerita"
            desc="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          />
        </li>
        <li onClick={abreModal}>
          <CardPerfil
            foto={pizza}
            nome="Pizza Marguerita"
            desc="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          />
        </li>
        <li onClick={abreModal}>
          <CardPerfil
            foto={pizza}
            nome="Pizza Marguerita"
            desc="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          />
        </li>
        <li onClick={abreModal}>
          <CardPerfil
            foto={pizza}
            nome="Pizza Marguerita"
            desc="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
          />
        </li>
      </Lista>
      <Modal className={modal.estaVisivel ? 'visivel' : ''}>
        <ModalContent className="overlay" onClick={fechaModal}>
          <ModalDiv className="container">
            <img src={pizza} alt="" />
            <div>
              <h3>Pizza Marguerita</h3>
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
              <Tag size="big">Adicionar ao carrinho</Tag>
            </div>
          </ModalDiv>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Cardapio
