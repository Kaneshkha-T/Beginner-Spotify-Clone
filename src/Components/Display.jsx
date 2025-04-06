
import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Displayhome from './Displayhome'
import Displaysongs from './Displaysongs'
import { albumsData } from '../assets/assets';

function Display() {

const displayRef = useRef();
const location = useLocation();
const isalbum = location.pathname.includes("album");
const albumid = isalbum ? location.pathname.slice(-1) : "";
const bg = albumsData[Number(albumid)].bgColor;

useEffect(() => {
 if (isalbum) {
    displayRef.current.style.background = `linear-gradient(${bg},#121212)`
  } else {
    displayRef.current.style.background = `#121212`

  }
},[location.pathname])


  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0 '>
        <Routes>
            <Route path='/' element = {<Displayhome />} />
            <Route path='/album/:id' element = {<Displaysongs />} />
        </Routes>
    </div>
  )
}

export default Display