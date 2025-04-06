import { createContext, useContext, useEffect, useRef, useState } from "react";


export const Playercontext = createContext();

import React from 'react'
import { songsData } from "../assets/assets";

function Playercontextprovider({children}) {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, settrack] = useState(songsData[2]);
    const [play,setplay] = useState(false);
    const [time, settime] = useState({
        current:{
            sec:0,
            min:0
        },
        total:{
            sec:0,
            min:0
        }
    });

    function playing(){
        audioRef.current.play();
        setplay(true);
    }
    function pause(){
        audioRef.current.pause();
        setplay(false);
    }
    async function playwithid(id){
        await settrack(songsData[id]);
        await audioRef.current.play();
        setplay(true);

    }
    async function previous(){
        if(track.id > 0){
            await settrack(songsData[track.id - 1]);
            await audioRef.current.play();
            setplay(true);
        } 
    }
    async function next(){
        if(track.id < songsData.length -1){
            await settrack(songsData[track.id + 1]);
            await audioRef.current.play();
            setplay(true);
        } 
    }

    async function seeksong(e) {
        audioRef.current.currentTime= ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration) ;
    }

    useEffect(() =>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate = () =>{
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";
                settime({
                    current:{
                        sec: Math.floor(audioRef.current.currentTime % 60),
                        min: Math.floor(audioRef.current.currentTime / 60),                    },
                    total:{
                        sec:Math.floor(audioRef.current.duration % 60),
                        min:Math.floor(audioRef.current.duration / 60),
                    }
                })
            }
        },1000)
    },[audioRef])
  const contextvalue = {
        audioRef,
        seekBg,
        seekBar,
        track,
        settrack,
        play,
        setplay,
        time,
        settime,
        playing,pause,
        playwithid,
        previous,next,
        seeksong
  }

  return(
    <Playercontext.Provider value = {contextvalue} >
        {children}
    </Playercontext.Provider>
  )

}

export default Playercontextprovider;