import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const VideoBlock = (props) => {
    const videoRef = useRef();
    let videoUrl = `${props.url}`;

    useEffect(() => {
        if(videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
          videoRef.current.src = videoUrl;
        }
        else if(Hls.isSupported()) {
          let hls = new Hls();
          hls.loadSource(videoUrl)
          hls.attachMedia(videoRef.current)
        }
      }, [])

      useEffect(() => {
        // Зберігмаємо прогресс
        const saveProgressInterval = setInterval(() => {
          localStorage.setItem(`videoProgress-${props.lessonId}`, videoRef.current.currentTime)
          console.log('save')
        }, 5000)
        
        // Отримуємо прогресс відео
        const videoProgress = localStorage.getItem(`videoProgress-${props.lessonId}`);
        if(videoProgress) {
          videoRef.current.currentTime = videoProgress;
        }

        const clearInter = () => clearInterval(saveProgressInterval);
        videoRef.current.addEventListener('ended', clearInter)

        return function() {
          clearInterval(saveProgressInterval);
        }
      }, [])

    return (
        <div>
            <video poster={props.posterLink} ref={videoRef} controls style={ {...props.style} }></video>
        </div>
    )
}

export default VideoBlock;