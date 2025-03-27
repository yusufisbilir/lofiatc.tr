import React, { useState } from 'react';
import LiveATCPlayer from './components/LiveATCPlayer';
import YouTubePlayer from './components/YouTubePlayer';
import VolumeControl from './components/VolumeControl';
import './App.css';

function App() {
  const [atcVolume, setAtcVolume] = useState(0.5);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStartPlaying = () => {
    setIsPlaying(true);
  };

  return (
    <div className='App'>
      {!isPlaying ? (
        <div className='start-screen' onClick={handleStartPlaying}>
          <div className='start-content'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg'
              alt='turkey Flag'
              className='turkey-flag'
            />
            <h1>Lofi ATC Türkiye</h1>
            <div className='start-button'>
              <span>Tap to start listening</span>
            </div>
          </div>
        </div>
      ) : (
        <>
          <header className='App-header'>
            <h1>Lofi ATC Türkiye</h1>
            <p>Sabiha Gökçen Havalimanı (SAW) + Lo-fi Music</p>
          </header>

          <main>
            <div className='players-container'>
              <LiveATCPlayer volume={atcVolume} isPlaying={isPlaying} />
              <YouTubePlayer isPlaying={isPlaying} />
            </div>

            <VolumeControl volume={atcVolume} onVolumeChange={setAtcVolume} />
          </main>

          <footer>
            <p>© 2025 LofiATC Türkiye</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
