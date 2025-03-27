import React, { useState } from 'react';
import LiveATCPlayer from './components/LiveATCPlayer';
import YouTubePlayer from './components/YouTubePlayer';
import VolumeControl from './components/VolumeControl';
import './App.css';

function App() {
  const [atcVolume, setAtcVolume] = useState(0.5);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>LofiATC Türkiye</h1>
        <p>İstanbul Havalimanı Kule İletişimi + Lo-fi Müzik</p>
      </header>

      <main>
        <div className='players-container'>
          <LiveATCPlayer volume={atcVolume} />
          <YouTubePlayer />
        </div>

        <VolumeControl volume={atcVolume} onVolumeChange={setAtcVolume} />
      </main>

      <footer>
        <p>© 2025 LofiATC Türkiye</p>
      </footer>
    </div>
  );
}

export default App;
