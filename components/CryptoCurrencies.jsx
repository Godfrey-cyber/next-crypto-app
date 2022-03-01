import React, { useEffect, useState } from 'react';
import millify from 'millify';
import Link from "next/link"
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';
import Image from 'next/image';
import { useRouter } from "next/router"
import Head from 'next/head';
import Header from './Header';
import { HiArrowSmDown, HiArrowSmUp } from "react-icons/hi"

const CryptoCurrencies = ({ simplified, setIsSimplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter()
  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);
    console.log(cryptos)
    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm, cryptos]);

  if (isFetching) return <Loader />;
  return (
    
    <div className="flex flex-col h-full w-full">
      {!simplified && (
        <div className="w-1/4 h-8 my-6">
          <input type="text" className="w-full border border-gray-300 p-2 rounded-sm focus:outline-none"
            placeholder="Search a coin"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      )}
      <div className="grid grid-cols-12 gap-4">
        {cryptos?.map((currency) => {
          let color = (currency.color) === null ? '#d51414' : currency.color
          return (
            <div key={currency.uuid} onClick={() => router.push(`/crypto/${currency.uuid}`)} className="flex-col lg:col-span-2 md:col-span-4 col-span-12 bg-white shadow-sm shadow-gray-300 rounded-sm p-4 hover:cursor-pointer">
              {/* Note: Change currency.id to currency.uuid  */}
              <div className="flex flex-col space-y-2">
                <div className="flex space-x-4 items-center justify-between">
                    <p className="text-[${color}] font-normal text-sm">{`${currency.rank}. ${currency.name}`}</p>
                    <span className="h-8 relative w-8"><Image className="" objectfit="contain" layout="fill" src={currency.iconUrl} alt="logoImg" /></span>
                </div>
                <p className="text-gray-600 font-normal">Price: {millify(currency.price)}</p>
                <p className="text-gray-500 text-sm font-semibold">Market Cap: {millify(currency.marketCap)}</p>
                <span className="flex space-x-1 items-center">
                  <p className="text-xs text-gray-500 font-semibold">Daily Change:</p>
                  <p className={`${currency.change < 0 ? "text-red-600" : "text-green-600"} text-xs font-semibold`}> {currency.change}%</p>
                  {currency.change < 0 ? <HiArrowSmDown className="text-lg text-red-600" /> : <HiArrowSmUp className="text-lg text-green-600" />}
                </span>
              </div>
            </div>
          )
        })}
      </div>
      </div>
  )
}
export default CryptoCurrencies