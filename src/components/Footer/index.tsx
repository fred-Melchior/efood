import logo from '../../assets/images/logo.png'
import ig from '../../assets/images/instagram.png'
import fb from '../../assets/images/facebook.png'
import tt from '../../assets/images/twitter.png'
import { Copy, FooterContainer, Redes } from './styles'

const Footer = () => (
  <div className="container">
    <FooterContainer>
      <img src={logo} alt="efood" />
      <Redes>
        <li>
          <img src={ig} alt="instagram" />
        </li>
        <li>
          <img src={fb} alt="facebook" />
        </li>
        <li>
          <img src={tt} alt="twitter" />
        </li>
      </Redes>
      <Copy>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, <br />
        qualidade dos produtos é toda do estabelecimento contratado.{' '}
      </Copy>
    </FooterContainer>
  </div>
)

export default Footer
