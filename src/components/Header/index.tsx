import vetorFundo from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'
import capaTratoria from '../../assets/images/fundopasta.png'
import {
  EfoodDiv,
  HeaderContainer,
  Reastaurante,
  RestauranteLink
} from './styles'

import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()
  const abrirCarrinho = () => {
    dispatch(open())
  }

  return (
    <HeaderContainer>
      <EfoodDiv style={{ backgroundImage: `url(${vetorFundo})` }}>
        <RestauranteLink to={'/'}>Restaurantes</RestauranteLink>
        <img src={logo} alt="efood" />
        <h2 onClick={abrirCarrinho}>Carrinho</h2>
      </EfoodDiv>
      <Reastaurante
        className="overlay"
        style={{ backgroundImage: `url(${capaTratoria})` }}
      >
        <h2>Italiana</h2>
        <h1>La Dolce Vita Tratoria</h1>
      </Reastaurante>
    </HeaderContainer>
  )
}

export default Header
