declare type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

declare type Pratos = {
  nome: string
  foto: string
  porcao: string
  descricao: string
  preco: number
  id: number
}
