import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const VideoBlock = (props) => {
    const {url, lessonId, style, ...otherProps} = props;
    const customAtributes = {...otherProps}

    const videoRef = useRef();
    let videoUrl = `${url}`;

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
          localStorage.setItem(`videoProgress-${lessonId}`, videoRef.current.currentTime)
          console.log('save')
        }, 5000)
        
        // Отримуємо прогресс відео
        const videoProgress = localStorage.getItem(`videoProgress-${lessonId}`);
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
        // <div>
            <video ref={videoRef} controls style={ {...style} } {...customAtributes}></video>
        // </div>
    )
}

export default VideoBlock;