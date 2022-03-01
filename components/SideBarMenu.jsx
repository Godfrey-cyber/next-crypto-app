import React from 'react'
import { AiOutlineBars } from 'react-icons/ai'

const SideBarMenu = ({nav, setNav}) => {
  return (
    <div className="absolute top-0 right-0 flex-col hidden bg-blur-sm">
        <div className="flex flex-col space-y-5 h-auto bg-white rounded-sm shadow shadow-gray-200">
            <span className="flex space-x-3 items-center">
                <p className="text-gray-700 text-sm hover:text-blue-500 transition delay-200">Home</p>
                <AiOutlineBars className="text-xl text-gray-400" />
            </span>
            <span className="flex space-x-3 items-center">
                <p className="text-gray-700 text-sm hover:text-blue-500 transition delay-200">Home</p>
                <AiOutlineBars className="text-xl text-gray-400" />
            </span>
            <span className="flex space-x-3 items-center">
                <p className="text-gray-700 text-sm hover:text-blue-500 transition delay-200">Home</p>
                <AiOutlineBars className="text-xl text-gray-400" />
            </span>
        </div>
    </div>
  )
}

export default SideBarMenu