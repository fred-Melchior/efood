import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Perfil from './Pages/Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/perfil/:id"
      element={
        <Perfil
          estabelecimento={{
            id: 0,
            titulo: '',
            destacado: '',
            tipo: '',
            avaliacao: '',
            descricao: '',
            capa: '',
            foto: '',
            cardapio: '',
            porcao: '',
            preco: 0
          }}
        />
      }
    />
  </Routes>
)

export default Rotas
