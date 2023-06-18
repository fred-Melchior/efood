import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import Listagem from '../../components/Listagem'

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
