"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
const News = () => {
    const [news, setNews] = useState([]);
    const [articleNumber, setArticleNumber] = useState(3);
    useEffect(() => {
    const fetchNews = async () => {
        try {
            const response = await axios.get(
                "https://saurav.tech/NewsAPI/top-headlines/category/business/in.json"
            );

            // console.log(response.data.articles); // Axios stores parsed data here

            // Set your state
            setNews(response.data.articles);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    fetchNews();
}, []);

  return (
    <main className='space-y-4 bg-gray-100 p-2 rounded-xl '>
        <h4 className='text-gray-700 font-bold space-y-3'>Whats Happening</h4>
        {
            news.slice(0, articleNumber).map((article, index) => (
                <a href={article.url} target='_blank' key={index} className="flex items-center gap-2 mb-4  p-1 border-gray-500 rounded-md hover:bg-gray-200 transition-all duration-200">
        
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700">{article.title}</h3>
                        <p className="text-xs text-gray-500 font-medium">{article.source.name}</p>
                    </div>

                    <img src={article.urlToImage} className="w-16 h-16 object-cover rounded-md" />
                </a>
            ))
        }
        <button onClick={()=>{
            setArticleNumber(articleNumber + 3);    
        }} className='w-full bg-gray-300 font-semibold hover:text-green-600 hover:cursor-pointer hover:bg-gray-200 rounded-xl'>See More</button>
    </main>
  )
}

export default News
