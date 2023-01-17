import React , {useState, useEffect} from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'
import './Newslist.css'

// To query /v2/top-headlines

const NewsList = ({qr}) => {
    const [articles,setArticles]= useState([])
    // const [term,setTerm]= useState('election')
    const category=qr
    console.log(qr)
    useEffect(() => {
        const getArticles = async()=>{
          if(category!==''){
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&pageSize=40&category='+category+'&sortBy=popularity&apiKey=cda5af4d037e43a8860b350a2ae6439d')
            console.log(response)
            setArticles(response.data.articles)}
            else{console.log('this is search')}
        }
        getArticles()
    },[category]);
  return (
    <div className='News'>
      {articles.map(article => {
        return (
            <NewsItem title={article.title} description={article.description} url={article.url} urlToImage={article.urlToImage} pubAt={article.publishedAt} content={article.content}/>
        )
      })} 
    </div>
  )
}

export default NewsList
// https://newsapi.org/v2/everything?q=tesla&from=2022-10-21&sortBy=publishedAt&apiKey=API_KEY
//cda5af4d037e43a8860b350a2ae6439d