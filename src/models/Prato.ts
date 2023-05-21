class Prato {
  img: string
  nome: string
  desc: string
  infos: string[]
  id: number

  constructor(
    img: string,
    nome: string,
    desc: string,
    infos: string[],
    id: number
  ) {
    this.img = img
    this.nome = nome
    this.desc = desc
    this.infos = infos
    this.id = id
  }
}

export default Prato
