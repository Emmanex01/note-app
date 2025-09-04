import React from 'react'
import { CiSearch } from "react-icons/ci";
import { BsPin } from "react-icons/bs";
import { RxPinBottom } from "react-icons/rx";
import { HiDotsHorizontal } from "react-icons/hi";

const Header = () => {
  return (
    <div className='flex items-center'>
        <div className='flex justify-between w-1/2'>
            <div className='border-gray-400 border flex px-6 gap-2 py-2 rounded-3xl items-center justify-center'>
                <CiSearch/>
                <input type="text" className='border-0 outline-0' placeholder='search notes'/>
            </div>
            <div className='flex items-center gap-6'>
                <BsPin/>
                <RxPinBottom/>
            </div>
      </div>
      <div className='flex justify-end gap-4 items-center font-medium text-gray-300 w-1/2'>
        <span>Updates</span>
        <span>Share</span>
        <div>Image</div>
        <HiDotsHorizontal/>
      </div>
    </div>
  )
}

export default Header
