import React, { useRef, useEffect } from 'react';

const LiveATCPlayer = ({ volume }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className='live-atc-player'>
      <h3>İstanbul Sabiha Gökçen Hava Limanı</h3>
      <div className='audio-container'>
        <audio
          ref={audioRef}
          controls
          autoPlay
          src='https://s1-bos.liveatc.net/ltfj2?nocache=2025032708285447119'
          className='audio-player'
        />
      </div>
    </div>
  );
};

export default LiveATCPlayer;
