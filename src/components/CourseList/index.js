import styles from './styles.module.scss'
import CourseItem from 'components/CourseItem';

const CourseList = ({courses}) => {
    // console.log('course', curse.id)
    
    return (
        <div className={styles.courseList}>
            {courses.map(item => {
                // console.log(item.meta.skills)
                return <CourseItem 
                    headline = {item.title}
                    image = {item.previewImageLink}
                    courseHeadline = {item.description}
                    lessonsCount = {item.lessonsCount}
                    skills = {item.meta.skills}
                    rating = {item.rating}
                    id = {item.id}
                    key = {item.id}
                />
            })}
        </div>
    )
}

export default CourseList;