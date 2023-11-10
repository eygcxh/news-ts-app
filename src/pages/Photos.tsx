import Gallery from "../components/Gallery"
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

function Photos() {
  const [dataNew, setDataNew] = useState<News | null>(null)
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await gettingDataFromNewsApi()
      setDataNew(result)
    }

    fetchData()
  }, [])  

  return (
    <div className="flex flex-row flex-wrap">
      {dataNew?.articles.map((article, index) => (
        <div className="m-2" key={index}>
          <Gallery 
          img={article.urlToImage}
          />
        </div>
      ))}
    </div>
  )
}

export default Photos