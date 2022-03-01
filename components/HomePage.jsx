import millify from 'millify';
import CryptoNews from "../components/CryptoNews"
import Cryptocurrencies from '../components/CryptoCurrencies';
import Loader from '../components/Loader';
import { useState } from 'react';
import { useGetCryptosQuery } from '../services/cryptoApi';

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  console.log(globalStats)
  const [simplified, setIsSimplified] = useState(true)
  if (isFetching) return <Loader />;
  return (
    <div className="flex flex-col h-full w-full">
      <h4 className="text-2xl text-blue-500 my-5 mx-auto">Global Crypto Stats</h4>
      <div className="grid grid-cols-12 gap-4 my-6">
        <span className="flex items-center col-span-6">
          <p className="text-gray-800 text-md" >Total Cryptocurrencies:</p>
          <p className="text-teal-400 text-md font-normal text-xl font-serif" >&nbsp; {globalStats.total}  </p>
          </span>
        <span className="flex items-center col-span-6">
            <p className="text-gray-800 text-md" >Total Exchanges: </p>
            <p className="text-teal-400 font-normal text-xl font-serif text-md">&nbsp; {millify(globalStats.totalExchanges)}</p>
          </span>
        <span className="flex items-center col-span-6">
            <p className="text-gray-800 text-md" >Total Market Cap: </p>
            <p className="text-teal-400 font-normal text-xl font-serif text-md">&nbsp; {`$${millify(globalStats.totalMarketCap)}`} </p>
          </span>
        <span className="flex items-center col-span-6">
            <p className="text-gray-800 text-md" >Total 24h Volume </p>
            <p className="text-teal-400 font-normal text-xl font-serif text-md">&nbsp;  {`$${millify(globalStats.total24hVolume)}`}</p>
          </span>
        <span className="flex items-center col-span-6">
            <p className="text-gray-800 text-md" >Total Cryptocurrencies </p>
            <p className="text-teal-400 font-normal text-xl font-serif text-md">&nbsp; {globalStats.total} </p>
          </span>
        <span className="flex items-center col-span-6">
            <p className="text-gray-800 text-md" >Total Markets </p>
            <p className="text-teal-400 font-normal text-xl font-serif text-md">&nbsp; {millify(globalStats.totalMarkets)} </p>
          </span>
      </div>
      <div className="flex items-center justify-between my-12">
        <h3 className="text-2xl text-blue-500 font-semibold mx-auto my-4">Top 10 Cryptos In The World</h3>
        <h3 onClick={() => setIsSimplified(prevState => !prevState)} className="text-2xl text-blue-500 font-semibold hover:cursor-pointer">Show more</h3>
      </div>
      <Cryptocurrencies simplified={simplified} />
      <div className="flex items-center justify-between my-12">
        <h3 className="text-2xl text-blue-500 font-semibold">Latest Crypto News</h3>
        <h3 onClick={() => setIsSimplified(prev => !prev)} className="text-2xl text-blue-500 font-semibold hover:cursor-pointer">Show more</h3>
      </div>
      <CryptoNews simplified={simplified} setIsSimplified={setIsSimplified} />
    </div>
  )
}

export default HomePage