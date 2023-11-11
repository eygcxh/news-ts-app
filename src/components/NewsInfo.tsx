import { Link } from "react-router-dom"

interface INewsInfo {
  title: string;
  publishedAt: string;
  img: string; 
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


function NewsInfo(props: INewsInfo) {
  const { title, publishedAt, img } = props

  const formatDate = (dateString: string) => {
    const options: Options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <Link to={`/articles/${title}`}>
      <div className="bg-gray-300 rounded-xl shadow-md hover:opacity-60 cursor-pointer ">
        <img src={img} alt="" className="rounded-t-xl shadow-md" />
        <h2 className="px-5 pt-2">{title}</h2>
        <h2 className="px-5 ">{formatDate(publishedAt)}</h2>
      </div>
    </Link>
  )
}

export default NewsInfo