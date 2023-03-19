import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import LessonsList from "components/LessonsList";
import VideoBlock from "components/VideoBlock";
import SkillsList from "components/SkillsList";
import DateView from "components/DateView";

import getCourse from "services/getCourse";

import styles from './styles.module.scss';

const CourseDetailPage = () => {
    const [course, setCourse] = useState(null)
    const { courseId } = useParams();

    useEffect(() => {
        getCourse(courseId)
            .then(response => setCourse(response.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className={styles.detailWrapper}>
            {course && 
            <>
                <h1>{course.title}</h1>
                <h2>{course.description}</h2>
                <VideoBlock 
                    url = {'courseVideoPreview' in course.meta && 'link' in course.meta.courseVideoPreview && course.meta.courseVideoPreview.link}
                    style = {{
                        width: '100%',
                    }}
                />
                <DateView 
                    date = {course.launchDate}
                />
                <div>Use CTRL + ArrowUp to speed up the video</div>
                <div>Use CTRL + DownUp to slow down the video</div>
                <div className={styles.skillsList}>
                    <p>Skills: </p>
                    <SkillsList 
                        list = {course.meta.skills}
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