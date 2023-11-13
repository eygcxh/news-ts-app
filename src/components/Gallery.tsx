import { useState } from "react"

interface IImages {
  img: string;
}

function Gallery(props: IImages) {
  const { img } = props

  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const handleImageClick = () => {
    setIsExpanded(!isExpanded)
  }

  const imgClass = isExpanded ? 'fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-9/12 h-auto z-50' : 'h-24'
  const sectionClass = isExpanded ? 'fixed inset-0 bg-black/70 z-40' : ''
  
  return (
      <section className={sectionClass}>
        <img className={imgClass} src={img} alt="" onClick={handleImageClick}/>
      </section>
    )
}

export default Gallery