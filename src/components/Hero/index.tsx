import vetorFundo from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'
import { HeroContainer, Title } from './styles'

const Hero = () => (
  <div className="container">
    <HeroContainer style={{ backgroundImage: `url(${vetorFundo})` }}>
      <img src={logo} alt="eFood" />
      <Title>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </Title>
    </HeroContainer>
  </div>
)

export default Hero
