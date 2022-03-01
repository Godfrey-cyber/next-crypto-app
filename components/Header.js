import React, { useState, useEffect } from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import { useRouter } from "next/router"
import SideBarMenu from './SideBarMenu';

const Header = () => {
  const router = useRouter()
  const [nav, setNav] = useState(false)
  const showNav = () => {
    setNav(prevState => !prevState)
  }
  return (
    <div className="flex items-center justify-between bg-white shadow-md shadow-gray-300 py-4 lg:px-24 px-6 top-0 z-50 sticky">
    {/* logo */}
    <span className="flex">
        Cryptoverse
      </span>
      <div className="lg:inline-flex space-x-5 items-center hidden">
        <p onClick={() => router.push("/")} className="text-sm text-gray-800 hover:cursor-pointer hover:text-blue-400 transition delay-300">Home</p>
        <p onClick={() => router.push("/cryptos")} className="text-sm text-gray-800 hover:cursor-pointer hover:text-blue-400 transition delay-300">Crypto Currencies</p>
        <p onClick={() => router.push("/exchanges")} className="text-sm text-gray-800 hover:cursor-pointer hover:text-blue-400 transition delay-300">Exchanges</p>
        <p onClick={() => router.push("/news")} className="text-sm text-gray-800 hover:cursor-pointer hover:text-blue-400 transition delay-300">News</p>
      </div>
      <span onClick={showNav} className="p-2 flex items-center justify-between lg:hidden">
        <AiOutlineBars className="text-xl" />
      </span>
       {!nav && <SideBarMenu setNav={setNav} nav={nav}/>} 
    </div>
  )
}

export default Header