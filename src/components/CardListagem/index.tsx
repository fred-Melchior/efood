import { Link } from 'react-router-dom'
import {
  Capa,
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

export type Props = {
  img: string
  nome: string
  desc: string
  avaliacao: string
  id: number
  infos: string[]
}

const CardListagem = ({ img, nome, desc, infos, avaliacao, id }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 222) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <Infos>
        {infos.map((info) => (
          <Tag size="small" key={info}>
            {info}
          </Tag>
        ))}
      </Infos>
      <Capa src={img} alt="" />
      <CardContainer>
        <DivTitle>
          <Title>{nome}</Title>
          <Star>
            <Title>{avaliacao}</Title>
            <img src={star} alt="star" />
          </Star>
        </DivTitle>
        <Desc>{getDescricao(desc)}</Desc>
        <Link to={`/perfil/${id}`}>
          <Tag size="small" cursor="y">
            Saiba mais
          </Tag>
        </Link>
      </CardContainer>
    </Card>
  )
}

export default CardListagem
