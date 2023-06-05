import Tag from '../Tag'
import { Card } from './styles'
import { Pratos } from '../../Pages/Perfil'

const CardPerfil = ({ foto, nome, desc }: Pratos) => {
  return (
    <Card>
      <img src={foto} alt="pizza marguerita" />
      <h3>{nome}</h3>
      <p>{desc}</p>
      <Tag size="big">Adicionar ao carrinho</Tag>
    </Card>
  )
}

export default CardPerfil
