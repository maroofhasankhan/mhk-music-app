import './styles/App.scss';
//Importing the components
import Nav from './components/Nav.js'
import Song from './components/Song.js'
import Player from './components/Player.js'
import { useState ,useRef} from 'react';
import data from './data.js';
import Library from './components/Library.js';

function App() {
  //ref
    const audioRef=useRef(null);
  //state
  const [songs,setSongs]=useState(data());
  const [currentSong,setCurrentSong]=useState(songs[0]);
  const [isPlaying,setIsPlaying] =useState(false);
  const[songInfo,setSongInfo]=useState({
        currentTime:0,
        duration:0,
        animationPercentage:0,
  });
  const [LibraryStatus,setLibraryStatus] = useState(false);
  

    const timeChangeHandler =(e)=>{
        const currentTime= e.target.currentTime;
        const duration= e.target.duration;
        //caculate Percentage
        const roundedCurrent =Math.round(currentTime)
        const roundedDuration =Math.round(duration)
        const animation = Math.round((roundedCurrent/roundedDuration)*100)
        setSongInfo({...songInfo, currentTime,duration,animationPercentage:animation});

    };

    const songEndHandler = async () =>{
      let currentIndex = songs.findIndex((song)=>song.id === currentSong.id);
      await setCurrentSong((currentIndex===songs.length-1)? songs[0] : songs[currentIndex+1])
      if (isPlaying) {
    audioRef.current.load(); // Load the new audio source
    audioRef.current.onloadeddata = () => {
      audioRef.current.play();
    };
    };
  }
  return ( 
    <div className={`App ${LibraryStatus ? "library-active" : ""}`}>
      <Nav LibraryStatus={LibraryStatus}
      setLibraryStatus={setLibraryStatus}/>
      {/* <h1>Music player</h1> */}
      <Song currentSong={currentSong}/>
      
      <Player 
      audioRef={audioRef}  
      currentSong={currentSong} 
      setIsPlaying={setIsPlaying} 
      isPlaying={isPlaying} 
      setSongInfo={setSongInfo}
      songInfo={songInfo}
      songs={songs} 
      setCurrentSong={setCurrentSong}
      setSongs={setSongs}

      />
      
      <Library  
      LibraryStatus={LibraryStatus}
      songs={songs} 
      setCurrentSong={setCurrentSong}
      audioRef={audioRef} 
      isPlaying={isPlaying} 
      setSongs={setSongs}
      />
      
      
      <audio 
      type="audio/mp4" 
      onLoadedMetadata={timeChangeHandler} 
      onTimeUpdate={timeChangeHandler} 
      ref={audioRef} 
      src={currentSong.audio}
      onEnded={songEndHandler}
      ></audio>

    </div>
  );
}

export default App;
