import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { closeModal } from '../../store/reducers/modal'
import { open, add } from '../../store/reducers/cart'

import { Modal, ModalDiv, ModalContent } from './styles'

import Tag from '../Tag'

type Props = {
  prato: Pratos
}

const ModalPedido = ({ prato }: Props) => {
  const { isModalOpen } = useSelector((state: RootReducer) => state.modal)

  const dispatch = useDispatch()

  const fecharModal = () => {
    dispatch(closeModal())
  }

  const openCart = () => {
    dispatch(closeModal())
    dispatch(open())
    dispatch(add(prato))
  }

  return (
    <Modal className={isModalOpen ? 'visivel' : ''}>
      <ModalContent className="overlay">
        <ModalDiv className="container" key={prato.id}>
          <img src={prato.foto} alt="" />
          <div>
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
            <p>{prato.porcao}</p>
            <Tag size="big" onClick={openCart}>
              Adicionar ao carrinho
            </Tag>
          </div>
          <button className="close" type="button" onClick={fecharModal} />
        </ModalDiv>
      </ModalContent>
    </Modal>
  )
}

export default ModalPedido
