import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'

interface INews {
  author?: string;
  content?: string;
  description: string;
  publishedAt: string;
  title: string;
  img?: string;
  moreInfo?: string | undefined;
}

type Options = {         
  localeMatcher?: "best fit" | "lookup" | undefined;
  weekday?: "long" | "short" | "narrow" | undefined;
  era?: "long" | "short" | "narrow" | undefined;
  year?: "numeric" | "2-digit" | undefined;
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
  day?: "numeric" | "2-digit" | undefined;
  hour?: "numeric" | "2-digit" | undefined;
  minute?: "numeric" | "2-digit" | undefined;
  second?: "numeric" | "2-digit" | undefined;
  timeZoneName?: "short" | "long" | "shortOffset" | "longOffset" | "shortGeneric" | "longGeneric" | undefined;
  formatMatcher?: "best fit" | "basic" | undefined;
  hour12?: boolean | undefined;
  timeZone?: string | undefined; 
}

function NewPage(props: INews) {

  const { author, content, description, publishedAt, title, img, moreInfo } = props

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      const imgLoad = new Image()
      
      imgLoad.src = img as string
      imgLoad.onload = () => setIsLoading(false)
      imgLoad.onerror =  () => setIsLoading(false)
  }, [img])

  const formatDate = (dateString: string) => {
    const options: Options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  if (isLoading) {
    return <div className="font-bold">Loading...</div>
  }

  return (
    <div>
      <img src={img} alt=""/>
      <h1 className="font-bold text-xl py-2">{title}</h1>
      <p className="py-1">{content}</p>
      <p className="py-1 pb-3">{description}</p>
      <Link to={moreInfo || '/defaultRoute'} className="font-semibold">Links: <span className="text-blue-800 font-light hover:text-gray-500 underline hover:no-underline	">{moreInfo}</span></Link>
      <h3 className="font-semibold">Author - {author === null ? 'unkown' : author}</h3>
      <h2 className="font-medium">{formatDate(publishedAt)}</h2>
    </div>
  )
}

export default NewPage