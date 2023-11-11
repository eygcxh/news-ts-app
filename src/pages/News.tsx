import NewsInfo from "../components/NewsInfo"
import { gettingDataFromNewsApi } from "../api"
import { useEffect, useState } from "react"

type Source = {
  id: string;
  name: string;
}

type Article = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
  urlToImage: string; 
}

type News = {
  status: string;
  totalResults: number;
  articles: Article[]
}

function NewsPage() {
  const [dataNew, setDataNew] = useState<News | null>(null)
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await gettingDataFromNewsApi()
      setDataNew(result)
    }

    fetchData()
  }, [])  

  return (
    <div className="flex flex-row">
      {dataNew?.articles.slice(2, 4).map((article, index) => (
        <div className="w-2/4 h-1/2 p-5 " key={index}>
          <NewsInfo 
          title={article.title}
          publishedAt={article.publishedAt}
          img={article.urlToImage}
          />
        </div>
      ))}
    </div>
  )
}

export default NewsPage

