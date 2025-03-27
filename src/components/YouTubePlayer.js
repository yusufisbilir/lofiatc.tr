import React, { useEffect, useRef } from 'react';

const YouTubePlayer = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    // YouTube API yükleme
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';

    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // YouTube API hazır olduğunda çalışacak fonksiyon
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('youtube-player', {
        videoId: '8lEGrC80a0w',
        playerVars: {
          autoplay: 1,
          controls: 1,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            // Video hazır olduğunda sesi açık olarak başlatır
            event.target.playVideo();
            event.target.unMute();
            event.target.setVolume(70);
          },
        },
      });
    };

    // Temizleme fonksiyonu
    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  return (
    <div className='youtube-player'>
      <h3>Lo-fi Müzik</h3>
      <div id='youtube-player'></div>
    </div>
  );
};

export default YouTubePlayer;
