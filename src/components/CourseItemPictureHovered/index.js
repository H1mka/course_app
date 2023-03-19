import { useState, useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import Hls from 'hls.js';

const CourseItemPictureHovered = ({sourceImage, sourceVideo, parentRef = null}) => {
    const [isHover, setIsHover] = useState(false);

    const videoRef = useRef();
    let videoUrl = `${sourceVideo}`;

    useEffect(() => {
        if(videoRef.current.canPlayType('application/vnd.apple.mpegurl') && sourceVideo) {
          videoRef.current.src = videoUrl;
        }
        else if(Hls.isSupported() && sourceVideo) {
          let hls = new Hls();
          hls.loadSource(videoUrl)
          hls.attachMedia(videoRef.current)
        }
      }, [])

    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => {
        setIsHover(false)
        videoRef.current.currentTime = 0;  
    };
    useEffect(() => {
        if(parentRef) {
            parentRef.current.addEventListener('mouseenter', handleMouseEnter);
            parentRef.current.addEventListener('mouseleave', handleMouseLeave);                   // коли перестали переглядати, відео починається з 0 секунди
        }
    }, [])

    return (
        <div className={styles.imagePreviewWrapper}>
            {videoUrl && 
                <video 
                    ref={videoRef} 
                    muted
                    autoPlay
                />
            }
            <img 
                className={`${styles.img} 
                ${isHover && styles.down}`} 
                src = {sourceImage} 
                alt="course preview"
            />
        </div>
    )
}

export default CourseItemPictureHovered;