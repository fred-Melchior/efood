import Tag from '../Tag'
import { Card } from './styles'

export type Props = {
  foto: string
  nome: string
  desc: string
}

const CardPerfil = ({ foto, nome, desc }: Props) => (
  <Card>
    <img src={foto} alt="pizza marguerita" />
    <h3>{nome}</h3>
    <p>{desc}</p>
    <Tag size="big">Adicionar ao carrinho</Tag>
  </Card>
)

export default CardPerfil
