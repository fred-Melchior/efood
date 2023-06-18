import Tag from '../Tag'
import { Card } from './styles'

const CardPerfil = ({ foto, nome, descricao }: Pratos) => {
  return (
    <Card>
      <img src={foto} alt="pizza marguerita" />
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <Tag size="big">Adicionar ao carrinho</Tag>
    </Card>
  )
}

export default CardPerfil
