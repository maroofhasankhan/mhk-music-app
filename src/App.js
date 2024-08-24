import './styles/App.scss';
//Importing the components
import Song from './components/Song.js'
import Player from './components/Player.js'
import { useState } from 'react';
import data from './util.js';

function App() {
  const [songs,setSongs]=useState(data());
  const [currentSong,setCurrentSong]=useState(songs[0]);
  return (
    <div className="App">
      <h1>Music player</h1>
      <Song currentSong={currentSong}/>
      <Player/>
    </div>
  );
}

export default App;
