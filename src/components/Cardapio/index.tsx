import Prato from '../../models/Prato'
import CardPerfil from '../CardPerfil'
import { Lista } from './styles'

export type Props = {
  pratos: Prato[]
}

const Cardapio = ({ pratos }: Props) => (
  <div className="container">
    <Lista>
      {pratos.map((prato) => (
        <CardPerfil
          key={prato.id}
          nome={prato.nome}
          img={prato.img}
          desc={prato.desc}
        />
      ))}
    </Lista>
  </div>
)

export default Cardapio
