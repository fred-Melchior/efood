import CardListagem from '../CardListagem'
import { Container, Lista } from './styles'

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
    <Container className="container">
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
    </Container>
  )
}

export default Listagem
