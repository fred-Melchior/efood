import Cardapio from '../../components/Cardapio'
import Header from '../../components/Header'

const Checkout = () => {
  return (
    <>
      <Header />
      <Cardapio
        prato={{
          nome: '',
          foto: '',
          porcao: '',
          descricao: '',
          preco: 0,
          id: 0
        }}
      />
    </>
  )
}
export default Checkout
