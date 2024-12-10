class Restaurante {
  image: string
  description: string
  category: string
  infos: string[]
  title: string
  id: number

  constructor(
    id: number,
    image: string,
    description: string,
    category: string,
    infos: string[],
    title: string
  ) {
    this.id = id
    this.image = image
    this.description = description
    this.category = category
    this.infos = infos
    this.title = title
  }
}

export default Restaurante
