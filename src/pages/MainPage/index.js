import { useEffect, useState } from 'react';

import CourseList from "components/CourseList";

import getCourses from 'services/getCourses';

import styles from "./style.module.scss";

const MainPage = () => {
    const [courses, setCourses] = useState([]);
    const [needUpload, setNeedUpload] = useState(false);
    const [sliceCount, setSliceCount] = useState(10)                    // Останні 10 курсів

    useEffect(() => {
        getCourses()
            .then(response => {
                setCourses(response.data.courses)
            })
            .catch(er => console.log(er))
    }, [])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function() {
            document.removeEventListener('scroll', scrollHandler)
        }
    })

    useEffect(() => {
        if(needUpload) {
            if(sliceCount + 2 > courses.length) setSliceCount(courses.length);
            else setSliceCount(prevent => prevent += 2);

            setNeedUpload(false);
        }
    }, [needUpload])

    const scrollHandler = event => {
        const scrollHeight = event.target.documentElement.scrollHeight,
        scrollTop = event.target.documentElement.scrollTop,
        innerHeight = window.innerHeight;
        if( scrollHeight - (scrollTop + innerHeight) < 100 && courses.length > sliceCount) {
            setNeedUpload(true)
        }
    }

    return (
        <div className={styles.mainWrapper}>
            <h1>Our Courses</h1>
            
            {/* Використовую reverse, щоб останній курс був самим першим у списку */}
            { courses.length > 0 && <CourseList courses = {courses.slice(courses.length - sliceCount).reverse()}/> }
        </div>
    )
}

export default MainPage;