import React from "react";

const LibrarySong = ({setSongs,isPlaying,audioRef,song, songs, setCurrentSong,id}) =>{
    
    //event Listners
    const onSelectHandler= async () =>{
       
        await setCurrentSong(song);
        //add active class
        const newSong = songs.map((song) => {
            if(song.id === id){
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
        await setSongs(newSong);
        //checking if song is playing or not
        if (isPlaying) audioRef.current.play();

    }
    return(
        <div onClick={onSelectHandler} className={`library-song ${song.active ? 'selected' : '' }`}>
            <img alt={song.name} src={song.cover} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}


export default LibrarySong;