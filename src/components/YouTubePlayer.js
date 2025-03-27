import React, { useEffect, useRef } from 'react';

const YouTubePlayer = ({ isPlaying }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    // YouTube API yükleme
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';

    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // YouTube API hazır olduğunda çalışacak fonksiyon
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: '8lEGrC80a0w',
        playerVars: {
          autoplay: isPlaying ? 1 : 0,
          controls: 1,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            if (isPlaying) {
              event.target.playVideo();
              event.target.unMute();
              event.target.setVolume(70);
            }
          },
        },
      });
    };

    // Temizleme fonksiyonu
    return () => {
      window.onYouTubeIframeAPIReady = null;
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [isPlaying]);

  return (
    <div className='youtube-player'>
      <h3>Lo-fi Müzik</h3>
      <div id='youtube-player'></div>
    </div>
  );
};

export default YouTubePlayer;
