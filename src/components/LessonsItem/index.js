import { useState, useEffect, useRef } from "react";
import shevron from 'assets/icons/chevron-down-solid.svg';
import lock from 'assets/icons/lock-solid.svg'
import VideoBlock from "components/videoBlock";

import styles from './styles.module.scss'

const LessonsItem = ({lesson}) => {
    const [accordActive, setAccordActive] = useState(false)
    const [heightEl, setHeightEl] = useState(`0px`);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
        if(lesson.status === 'unlocked' && lesson.type === "video") {
            setStatus(true)
        }
    }, [])

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, [accordActive])

    const refHeight = useRef(null);

    const shevronStyle = {
        transition: 'transform 0.2s ease',
        transform: accordActive ? 'rotate(180deg)' : 'rotate(0)'
    }

    return (
        <div className={status ? `${styles.accordeonItem}` : `${styles.accordeonItem} ${styles.lockItem}`}>
            <div 
                className={styles.accordeonCaption} 
                onClick={status ? () => setAccordActive(!accordActive) : null}
            >
                <div>Lesson {lesson.order}: {lesson.title}</div>
                <img 
                    src={ status ? shevron : lock }
                    style={shevronStyle} 
                    alt=""
                />
            </div>

            <div  
                className={styles.accordeonToggle}
                style = {{height : accordActive ? `${heightEl}` : "0px"}}
                ref = {refHeight}
            >
                {status &&
                    <>
                        <VideoBlock 
                            url = {lesson.link}
                            posterLink = {`${lesson.previewImageLink}/lesson-${lesson.order}.webp`}
                            lessonId = {lesson.id}
                            style = {{
                                maxWidth: '100%',
                                width: '100%',
                                maxHeight: '500px'
                            }}
                        />
                        <p>{lesson.title}</p>
                    </>
                }
            </div>
        </div>
    )
}

export default LessonsItem;