

import React, { useContext } from 'react'
import Sidebar from './Components/Sidebar'
import Player from './Components/player'
import Display from './Components/Display'
import { Playercontext } from './context/Playercontext'

function App() {

  const {audioRef,track} = useContext(Playercontext);  

  return (
    <div className = 'h-screen bg-black' >
      <div className = 'h-[90%] flex' >
            <Sidebar />
            <Display />
      </div>
      <div>
        <Player />
        <audio ref={audioRef} src={track.file} preload='auto' ></audio>
      </div>
    </div>
  )
}

export default App