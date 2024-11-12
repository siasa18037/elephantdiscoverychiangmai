import React, { useEffect, useRef } from 'react';
import '../../styles/homepage/VideoBg.css';

const VideoBg = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        video.play().catch(error => {
          // Handle or log any playback errors
          console.error('Video playback error:', error);
        });
      } else {
        video.pause();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="video-container">
      <video ref={videoRef} className="background-video" autoPlay loop muted playsInline>
        <source src="assets/videos/introvideo.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section className="content">
        <div className="content-text">
          // <h1>Local Foundation</h1>
          <h1 id='text1'>Elephant <span id='text2'>Discovery</span></h1>
          <h2>Chiang Mai</h2>
          <a href="#intro" className="btn light">DISCOVER NOW</a>
        </div>
      </section>
    </div>
  );
};

export default VideoBg;
