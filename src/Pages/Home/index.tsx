import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import Listagem from '../../components/Listagem'

export interface ItemCardapio {
  url: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: string
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  foto: string
  cardapio: string
  porcao: string
  preco: number
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Hero />
      <Listagem restaurante={restaurantes} />
    </>
  )
}

export default Home
