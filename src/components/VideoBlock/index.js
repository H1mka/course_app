import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const VideoBlock = (props) => {
    const {url = null, lessonId, style, ...otherProps} = props;
    const customAtributes = {...otherProps}
    const videoSpeedUp = 0.25;                                // Зміна швидкості відео
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
        // Прогрес зберігається, якщо відео не на паузі
        const saveProgressInterval = setInterval(() => {
          if(!videoRef.current.paused) {
            localStorage.setItem(`videoProgress-${lessonId}`, videoRef.current.currentTime)
            console.log('save')
          }
        }, 5000)
        
        // Отримуємо прогресс відео
        const videoProgress = localStorage.getItem(`videoProgress-${lessonId}`);
        if(videoProgress) {
          videoRef.current.currentTime = videoProgress;
        }

        const clearInter = () => clearInterval(saveProgressInterval);
        videoRef.current.addEventListener('ended', clearInter)

        // Зміна швидкості відео, швидкість не більше 2, не меньше 0.25
        const speedChange = (event) => {
          if(event.code === 'ArrowUp' && event.ctrlKey && videoRef.current.playbackRate < 2) 
              videoRef.current.playbackRate += videoSpeedUp
          else if(event.code === 'ArrowDown' && event.ctrlKey && videoRef.current.playbackRate > 0.25)
              videoRef.current.playbackRate -= videoSpeedUp
        }
        document.addEventListener('keydown', speedChange)

        return function() {
          clearInterval(saveProgressInterval);
          document.removeEventListener('keydown', speedChange)
        }
      }, [])

    return (
        <video ref={videoRef} controls style={ {...style} } {...customAtributes}></video>
    )
}

export default VideoBlock;