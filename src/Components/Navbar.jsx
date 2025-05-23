


import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate();


  return (
    <>
        <div className='w-full flex justify-between items-center font-semibold' >
            <div className='flex items-center gap-2'>
                <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src = {assets.arrow_left} alt="" />
                <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src = {assets.arrow_right} alt="" />
            </div>
            <div className='flex items-center gap-4' >
                <p className='bg-white text-black text-[15px] px-4 py1 rounded-2xl hidden md:block cursor-pointer ' >Explore premium</p>
                <p className='bg-black py-1 px-3 rounded-2xl text-white text-[12px] hidden md:block cursor-pointer'>Install App</p>
                <p className='bg-red-400 py-1 px-3 rounded-full text-white text-[12px] hidden md:block cursor-pointer'>K</p>
            </div>
        </div>
        <div className='flex items-center gap-2 mt-4' >
                <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'> All</p>
                <p className=' text-white px-3 py-1 rounded-2xl cursor-pointer'> Music</p>
                <p className=' text-white px-3 py-1 rounded-2xl cursor-pointer'> Podcast</p>        
 
            </div>
    </>

  )
}

export default Navbar