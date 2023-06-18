import { useDispatch } from 'react-redux'

import { openModal } from '../../store/reducers/modal'

import { Lista } from './styles'
import CardPerfil from '../CardPerfil'
import ModalPedido from '../Modal'

import { pedido } from '../../Pages/Perfil'

type Props = {
  prato: Pratos
}

const Cardapio = ({ prato }: Props) => {
  const dispatch = useDispatch()

  const abreModal = () => {
    dispatch(openModal(prato))
  }

  return (
    <div className="container">
      <Lista>
        {pedido.map((p) => (
          <li key={p.id} onClick={abreModal}>
            <CardPerfil
              foto={p.foto}
              descricao={p.descricao}
              nome={p.nome}
              preco={p.preco}
              id={p.id}
              porcao={p.porcao}
            />
          </li>
        ))}
      </Lista>
      <ModalPedido prato={prato} />
    </div>
  )
}

export default Cardapio
