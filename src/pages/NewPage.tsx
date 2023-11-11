import NewPageDetail from "../components/NewPageDetail"
import { gettingDataFromNewsApi } from "../api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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

type Params = {
  title: string;
}


function NewPage() {
  const [dataNew, setDataNew] = useState<News | null>(null)
  const { title } = useParams<Params>()
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await gettingDataFromNewsApi()
      setDataNew(result)
    }

    fetchData()
  }, [])  

  return (
    <div className="">
      {dataNew?.articles.filter(item => item.title === title).map((article) => (
            <div className="p-16" key={article.author}>
              <NewPageDetail 
                author={article.author}
                content={article.content}
                description={article.description}
                publishedAt={article.publishedAt}
                title={article.title}
                img={article.urlToImage}
                moreInfo={article.url}  
              />
            </div>
      ))}
    </div>
  )
}

export default NewPage
