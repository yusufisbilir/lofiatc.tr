import React, { useRef, useEffect } from 'react';

const LiveATCPlayer = ({ volume, isPlaying }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.log('LiveATC oynatma hatası:', error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

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
      <div className='info-message'>
        <p>Not: Ses akışında sorun yaşarsanız sayfayı yenileyin.</p>
      </div>
    </div>
  );
};

export default LiveATCPlayer;
