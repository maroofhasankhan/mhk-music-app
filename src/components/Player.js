import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay,faPause, faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";

const Player = ({setSongs,setCurrentSong,songs,songInfo,setSongInfo,audioRef,currentSong,setIsPlaying,isPlaying }) =>{
    


    const activeLibraryHandler = (nextPrev) =>{
        const newSong = songs.map((song) => {
            if(song.id === nextPrev.id){
                return{
                    ...song,
                    active: true,
                }
            }
            else{
                return {
                    ...song,
                    active: false,

                }
            }
        })
        setSongs(newSong);
    }
    


    //Event Listners
    const playSongHandler=()=>{
        if(isPlaying){
            setIsPlaying(false);
            audioRef.current.pause();
        }
        else{
            audioRef.current.play();
            setIsPlaying(true);

        }
    };

    
    
    const getTime=(time)=>{
        return(
            Math.floor(time/60)+ ":" +((Math.floor(time% 60)>9)?Math.floor(time% 60): "0"+Math.floor(time% 60))
        );
}

    const dragHandler=(e)=>{
        audioRef.current.currentTime=e.target.value;
         setSongInfo({...songInfo, currentTime:e.target.value})
    }

    const skipTrackHandler= async (direction)=>{
        let currentIndex = songs.findIndex((song)=>song.id === currentSong.id);
        if(direction === 'skip-forward'){
            await setCurrentSong((currentIndex===songs.length-1)? songs[0] : songs[currentIndex+1])
            activeLibraryHandler((currentIndex===songs.length-1)? songs[0] : songs[currentIndex+1]);
        }
        else{
            await setCurrentSong((currentIndex===0)? songs[songs.length-1] : songs[currentIndex-1])
            activeLibraryHandler((currentIndex===0)? songs[songs.length-1] : songs[currentIndex-1]);
        }
        if (isPlaying) {
            audioRef.current.load(); // Load the new audio source
            audioRef.current.onloadeddata = () => {
                audioRef.current.play();
            };
        };
    }

    //add the styles
    const trackAim ={
        transform: `translateX(${songInfo.animationPercentage}%)`
    }

    return(
        <div className="player">
            <div className="time-control">
                <p>{songInfo.duration?  getTime(songInfo.currentTime): "0:00"}</p>

                <div style={{background:`linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`}} className="track">
                    <input min={0} max={songInfo.duration || 0 } onChange={dragHandler} value={songInfo.currentTime} type="range" />

                    <div style={trackAim} className="animate-track">                </div>
                </div>
                <p>{songInfo.duration? getTime(songInfo.duration): "0:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={()=>{skipTrackHandler('skip-back')}} className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying? faPause:faPlay} />
                <FontAwesomeIcon onClick={()=>{skipTrackHandler('skip-forward')}}  className="skip-forward" size="2x" icon={faAngleRight} />
            </div>
        </div>
    )
}


export default Player;