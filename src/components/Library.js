import React from "react";
import LibrarySong from "./LibraySong";

const Library =({LibraryStatus,setSongs,isPlaying,audioRef, songs, setCurrentSong})=>{
    return(
        <div className={`library ${LibraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song=>(
                    <LibrarySong 
                    songs={songs} 
                    setCurrentSong={setCurrentSong} 
                    song={song}
                    id={song.id}
                    key ={song.id}
                    audioRef={audioRef}
                    isPlaying={isPlaying}
                    setSongs={setSongs}
                    />
                ))}
                
            </div>
        </div>
    )
};


export default Library;