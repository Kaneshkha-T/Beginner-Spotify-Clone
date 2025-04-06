

import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { Playercontext } from '../context/Playercontext';

function Displaysongs() {

    const {id} = useParams();
    const albumData = albumsData[id];
    const {playwithid} = useContext(Playercontext);

  return (
    <>
    <Navbar/>
    <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end  ' >
        <img className='w-48 rounded' src={albumData.image} alt="" />
        <div className='flex flex-col' >
            <p>Playlist</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl' >{albumData.name}</h2>
            <h4  >{albumData.desc}</h4>
            <div className=' mt-1 flex  gap-4  ' >
                <img className='inline-block w-8 gap-10 ' src={assets.spotify_logo} alt="" />
                <b>Spotify</b>
                1,3456,32 likes
                <b>53 songs</b>
                about 2 hr 20 mins
            </div>
        </div>
    </div>
    <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-whit' >
            <p><b className='mr-4'>#</b>Title</p>
            <p>Album</p>
            <p className="hidden sm:block">Date Added</p>
            <img className="m-auto w-4" src={assets.clock_icon} />
        </div>
        <hr />
        {
            songsData.map((item,index)=>(
                 <div onClick={() => playwithid(item.id)} className=" grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center  text-black hover:bg-gray-900">
                    <p className='text-white'>
                        <b className='mr-4 text-white' > {index+1} </b>
                        <img className='inline w-10 mr-5' src={item.image} alt="" />
                        {item.name}
                    </p>
                    <p className=' text-white text-[15px] '>{albumData.name}</p>
                    <p className=' text-white hidden sm:block'>5 days ago</p>
                    <p className='text-white text-[15px] text-center' >{item.duration}</p>
                 </div>
            ))
        }
    </>
  )
}

export default Displaysongs;