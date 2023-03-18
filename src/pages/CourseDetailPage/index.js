import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import LessonsList from "components/LessonsList";
import IconBlock from "components/IconBlock";
import VideoBlock from "components/videoBlock";

import getCourse from "services/getCourse";

import rocket from 'assets/icons/rocket-solid.svg'
import starSvg from 'assets/icons/star-regular.svg'

import styles from './styles.module.scss';

const CourseDetailPage = () => {
    const [course, setCourse] = useState(null)
    const { courseId } = useParams();

    useEffect(() => {
        getCourse(courseId)
            .then(response => setCourse(response.data) )
            .catch(err => console.log(err))
    }, [])

    console.log(course)
    return (
        <div className={styles.detailWrapper}>
            {course && <>
                <p>{courseId}</p>
                <h1>{course.title}</h1>
                <h2>{course.description}</h2>
                <VideoBlock 
                    url = {course.meta.courseVideoPreview.link} 
                    // posterLink = {`${course.previewImageLink}/cover.webp`}
                    style = {{
                        width: '100%',
                    }}
                />
                <div className={styles.blocks}>
                    <IconBlock 
                        svg = {rocket}
                        text = {`${course.lessons.length} lessons`}
                    />
                    <IconBlock 
                        svg = {starSvg}
                        text = {course.rating}
                    />
                </div>
                <LessonsList 
                    lessonsInfo = {course.lessons}
                />
            </>
            }
        </div>
        
    )
}

export default CourseDetailPage;