import React, { useEffect, useState } from 'react';
import millify from 'millify';
import Link from "next/link"
import { useGetCryptosQuery } from '../services/cryptoApi';
import Image from 'next/image';
import { useRouter } from "next/router"
import Head from 'next/head';
import Loader from '../components/Loader';
import Header from "../components/Header"
import { HiArrowSmDown, HiArrowSmUp } from 'react-icons/hi';

const Cryptos = ({ simplified, setIsSimplified }) => {
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
    <div className="h-full w-screen bg-teal-50 overflow-x-hidden">
      <Head>
        <title>Top 100 crypto Currencies in the world</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col lg:px-24 px-6">
        {!simplified && (
            <div className="w-1/4  h-8 my-6">
                <input className="w-full focus:outline-none h-10 bg-white border border-gray-300 p-2 rounded-sm" type="text"
                    placeholder="Searcch a coin"
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
                        <p className={`text-[${color}] font-normal`}>{`${currency.rank}. ${currency.name}`}</p>
                        <span className="h-10 relative w-10">
                        <Image className="" objectfit="contain" layout="fill" src={currency.iconUrl} alt="logoimage"/></span>
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
    </main>
    </div>
  )
}
export default Cryptos