

import React, { useContext } from 'react'
import { Playercontext } from '../context/Playercontext'

function Songdata({image,name,desc,id}) {

  const {playwithid} = useContext(Playercontext);

  return (
    <div onClick={() => playwithid(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-gray-500' >
    <img className ='rounded' src={image} alt="" />
    <p className='font-bold mt-2 mb-1' >{name}</p>
    <p className='text-slate-200 text-sm' >{desc}</p>
</div>
  )
}

export default Songdata