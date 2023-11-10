
interface IImages {
  img: string;
}

function Gallery(props: IImages) {
  const { img } = props
  
  return (
      <section>
        <img className="h-24" src={img} alt="" />
      </section>
    )
}

export default Gallery