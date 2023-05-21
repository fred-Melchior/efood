import Hero from '../../components/Hero'
import Listagem from '../../components/Listagem'
import Prato from '../../models/Prato'
import sushi from '../../assets/images/imagem.png'
import pasta from '../../assets/images/pasta.png'

const opcoes: Prato[] = [
  {
    id: 1,
    img: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    desc: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japãosem sair do lar com nosso delivery!',
    nome: 'Hioki Sushi'
  },
  {
    id: 2,
    img: pasta,
    infos: ['Italiana'],
    desc: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nome: 'La Doce Vitta Tratoria'
  },
  {
    id: 3,
    img: pasta,
    infos: ['Italiana'],
    desc: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nome: 'La Doce Vitta Tratoria'
  },
  {
    id: 4,
    img: pasta,
    infos: ['Italiana'],
    desc: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nome: 'La Doce Vitta Tratoria'
  },
  {
    id: 5,
    img: pasta,
    infos: ['Italiana'],
    desc: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nome: 'La Doce Vitta Tratoria'
  },
  {
    id: 6,
    img: pasta,
    infos: ['Italiana'],
    desc: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nome: 'La Doce Vitta Tratoria'
  }
]

const Home = () => (
  <>
    <Hero />
    <Listagem pratos={opcoes} />
  </>
)

export default Home
