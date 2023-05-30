import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Cardapio from '../../components/Cardapio'
import Header from '../../components/Header'

import { Restaurante } from '../Home'

type Props = {
  estabelecimento: Restaurante
}

const Perfil = ({ estabelecimento }: Props) => {
  const { id } = useParams()
  const [pratos, setPratos] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPratos(res))
  }, [id])
  return (
    <>
      <Header />
      <Cardapio restaurante={pratos} />
    </>
  )
}

export default Perfil
