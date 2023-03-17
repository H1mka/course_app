import { useEffect, useState } from 'react';

import CourseList from "components/CourseList";

import getCourses from 'services/getCourses';

import styles from "./style.module.scss";

const MainPage = () => {
    const [courses, setCourses] = useState([]);
    const [needUpload, setNeedUpload] = useState(false);
    const [sliceCount, setSliceCount] = useState(10)                    // Останні 10 курсів
    const [coursesLenght, setCoursesLenght] = useState(0)

    useEffect(() => {
        getCourses()
            .then(response => {
                setCourses(response.data.courses)
                setCoursesLenght(response.data.courses.length)
            })
            .catch(er => console.log(er))
    }, [])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function() {
            document.removeEventListener('scroll', scrollHandler)
        }
    })

    // console.log(courses.length)
    useEffect(() => {
        if(needUpload) {
            console.log('one time')
            console.log(sliceCount)
            if(sliceCount + 2 > courses.length) setSliceCount(courses.length);
            else setSliceCount(prevent => prevent += 2);

            setNeedUpload(false);
        }
    }, [needUpload])

    const scrollHandler = event => {
        const scrollHeight = event.target.documentElement.scrollHeight,
        scrollTop = event.target.documentElement.scrollTop,
        innerHeight = window.innerHeight;
        // console.log('length', courses.length)
        // console.log('SliceCount', sliceCount)
        if( scrollHeight - (scrollTop + innerHeight) < 100 && courses.length > sliceCount) {
            setNeedUpload(true)
        }
    }

    return (
        <div className={styles.mainWrapper}>
            <h1>Our Courses</h1>
            
            {/* Використовую reverse, щоб останній курс був самим першим у списку */}
            {console.log('slice', sliceCount)}
            { courses.length > 0 && <CourseList courses = {courses.slice(courses.length - sliceCount).reverse()}/> }
        </div>
    )
}

export default MainPage;