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
          console.log(videoRef.current)
        }
      }, [])
    return (
        <div>
            <video ref={videoRef} controls style={ {...props.style} } autoPlay onLoadCapture='321312'></video>
        </div>
    )
}

export default VideoBlock;