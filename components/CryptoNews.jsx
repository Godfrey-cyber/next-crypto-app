import React, { useState } from 'react';
import moment from 'moment';
import Link from "next/link"
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';
import Image from 'next/image';
import Head from 'next/head';
import Header from './Header';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified, setIsSimplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
    // console.log(cryptoNews)
  if (!cryptoNews?.value) return <Loader />;

  return (
    
    <div>
      {!simplified && (
        <div>
          <select
            showSearch
            className="w-1/4 bg-white text-gray-700 h-8 rounded-sm border-gray-300 border focus:outline-none"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <option className="bg-yellow-50 text-sm hover:bg-teal-300" value="Cryptocurency">Cryptocurrency</option>
            {data?.data?.coins?.map((currency) => <option value={currency.name}>{currency.name}</option>)}
          </select>
        </div>
      )}
        <div className="grid grid-cols-12 gap-4 my-8 w-full">
              {cryptoNews.value.map((news, i) => (
        <Link passHref href={news.url} target="_blank" rel="noreferrer">
        <div className="flex-col lg:col-span-4 md:col-span-6 col-span-12 bg-white hover:cursor-pointer hover:shadow-md shadow-sm shadow-gray-300 rounded-sm p-5" key={i}>
          <div hoverable className="news-card">
              <div className="grid grid-cols-12">
                 <h3 className="col-span-8 text-sm font-semibold">{news.name}</h3>
                <span className="col-span-4 relative h-14 w-14">
                <Image src={news?.image?.thumbnail?.contentUrl || demoImage} layout="fill" objectfit="contain" alt="" />
                 </span>
              </div>
              <p className="text-gray-700 text-sm">{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
              <div className="provider-container">
                <div className="flex items-center my-2">
                    <span className="relative h-8 w-8">
                    <Image layout="fill" objectfit="contain" src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                    </span>
                </div>
                <span className="flex items-center my-3 justify-between">
                    <p className="text-gray-500 text-xs">{news.provider[0]?.name}</p>
                    
                    <p className="text-gray-500 text-xs">{moment(news.datePublished).startOf('ss').fromNow()}</p>
                </span>
              </div>
            
          </div>
        </div>
        </Link>
              ))}
      </div>
      </div>
  );
};

export default News;
