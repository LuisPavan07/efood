class Produto {
  image: string
  title: string
  description: string
  id: number

  constructor(id: number, image: string, title: string, description: string) {
    this.id = id
    this.image = image
    this.title = title
    this.description = description
  }
}

export default Produto
