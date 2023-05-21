import vetorFundo from '../../assets/images/Vector.png'

import fundo from '../../assets/images/fundopasta.png'
import logo from '../../assets/images/logo.png'
import { EfoodDiv, HeaderContainer, Reastaurante } from './styles'

const Header = () => (
  <HeaderContainer>
    <EfoodDiv style={{ backgroundImage: `url(${vetorFundo})` }}>
      <h2>Restaurantes</h2>
      <img src={logo} alt="efood" />
      <h2>Carrinho</h2>
    </EfoodDiv>
    <Reastaurante style={{ backgroundImage: `url(${fundo})` }}>
      <h2>Italiana</h2>
      <h1>La dolce vita tratoria</h1>
    </Reastaurante>
  </HeaderContainer>
)

export default Header
