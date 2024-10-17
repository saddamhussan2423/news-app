import { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";


 const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
       let url =  `https://newsapi.org/v2/top-headlines/?country=us&category=${category}&apiKey=c03c68af8f804b519bd579303e79223f`;
      //  let url =  `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c03c68af8f804b519bd579303e79223f`;
       //  let url =  `https://newsapi.org/v2/top-headlines/sources/?apiKey=c03c68af8f804b519bd579303e79223f&country=in`;
       fetch(url).then((response) => response.json()).then(data => setArticles(data.articles))
    }, [category])
  return (
    <div className="row" style={{width:'90%', margin:'auto'}}>
        <h2 className="text-center pt-4">Latest <span className="badge bg-danger">News</span></h2>
        {
            articles.map((news, index) => {
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
            })
        }
    </div>
  )
}


export default NewsBoard