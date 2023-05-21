import {
  Card,
  CardContainer,
  Desc,
  DivTitle,
  Infos,
  Star,
  Title
} from './styles'

import Tag from '../Tag'

import star from '../../assets/images/star.png'
import { Link } from 'react-router-dom'

export type Props = {
  img: string
  nome: string
  desc: string
  infos: string[]
}

const CardListagem = ({ img, nome, desc, infos }: Props) => (
  <Card>
    <Infos>
      {infos.map((info) => (
        <Tag size="small" key={info}>
          {info}
        </Tag>
      ))}
    </Infos>
    <img src={img} alt="" />
    <CardContainer>
      <DivTitle>
        <Title>{nome}</Title>
        <Star>
          <Title>4.9</Title>
          <img src={star} alt="star" />
        </Star>
      </DivTitle>
      <Desc>{desc}</Desc>
      <Link to="/perfil">
        <Tag size="small">Saiba mais</Tag>
      </Link>
    </CardContainer>
  </Card>
)

export default CardListagem
