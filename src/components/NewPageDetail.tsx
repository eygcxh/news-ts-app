

interface INews {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  img: string;
}

function NewPage(props: INews) {

  const { author, content, description, publishedAt, title, img } = props

  return (
    <div>
      <h2>{author}</h2>
      <img src={img} alt="" />
      <h1>{publishedAt}</h1>
      <h1>{description}</h1>
      <h1>{title}</h1>
      <h1>{content}</h1>
    </div>
  )
}

export default NewPage