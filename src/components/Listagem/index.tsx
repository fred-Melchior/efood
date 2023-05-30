import CardListagem from '../CardListagem'
import { Lista } from './styles'

import { Restaurante } from '../../Pages/Home'

export type Props = {
  restaurante: Restaurante[]
}

const Listagem = ({ restaurante }: Props) => {
  const getInfos = (restaurante: Restaurante) => {
    const infos = []

    if (restaurante.destacado) {
      infos.push('Destaque da semana')
    }
    if (restaurante.avaliacao) {
      infos.push(restaurante.avaliacao)
    }

    return infos
  }

  return (
    <div className="container">
      <Lista>
        {restaurante.map((restaurante) => (
          <CardListagem
            key={restaurante.id}
            id={restaurante.id}
            img={restaurante.capa}
            nome={restaurante.titulo}
            desc={restaurante.descricao}
            avaliacao={restaurante.avaliacao}
            infos={getInfos(restaurante)}
          />
        ))}
      </Lista>
    </div>
  )
}

export default Listagem
