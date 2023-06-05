import vetorFundo from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'
import capaTratoria from '../../assets/images/pasta.png'
import {
  EfoodDiv,
  HeaderContainer,
  Reastaurante,
  RestauranteLink
} from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <EfoodDiv style={{ backgroundImage: `url(${vetorFundo})` }}>
        <RestauranteLink to={'/'}>Restaurantes</RestauranteLink>
        <img src={logo} alt="efood" />
        <h2>Carrinho</h2>
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
