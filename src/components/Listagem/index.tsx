import Prato from '../../models/Prato'
import CardListagem from '../CardListagem'
import { Lista } from './styles'

export type Props = {
  pratos: Prato[]
}

const Listagem = ({ pratos }: Props) => (
  <div className="container">
    <Lista>
      {pratos.map((prato) => (
        <CardListagem
          key={prato.id}
          img={prato.img}
          nome={prato.nome}
          desc={prato.desc}
          infos={prato.infos}
        />
      ))}
    </Lista>
  </div>
)

export default Listagem
