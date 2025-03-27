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
    <audio
      ref={audioRef}
      controls
      autoPlay
      src='https://s1-bos.liveatc.net/ltfj2'
      style={{
        visibility: 'hidden',
      }}
    />
  );
};

export default LiveATCPlayer;
