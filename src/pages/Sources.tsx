import SourcesInfo from "../components/SoursesInfo"

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

function Sources() {
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
      <h4 className="ml-2 font-bold">Sources: </h4>
      {dataNew?.articles.map((article, index) => (
        <div className="mx-2 mt-1 underline hover:text-blue-900 cursor-pointer" key={index}>
          <SourcesInfo 
          source={article.source}
          />
        </div>
      ))}
    </div>
  )
}

export default Sources