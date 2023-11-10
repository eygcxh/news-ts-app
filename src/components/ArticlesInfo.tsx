import { Link } from "react-router-dom"

interface INewsInfo {
  title: string;
  publishedAt: string;
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

function ArticlesInfo(props: INewsInfo) {

  const { title, publishedAt } = props

  const formatDate = (dateString: string) => {
    const options: Options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString("en-US", options)
  }


  return (
    <Link to='/' className="cursor-pointer">
      <div className="border-b-2 hover:opacity-50">
        <h3 className="font-bold">{title}</h3>
        <h2 className="text-sm">{formatDate(publishedAt)}</h2>
      </div>
    </Link>
  )
}

export default ArticlesInfo
