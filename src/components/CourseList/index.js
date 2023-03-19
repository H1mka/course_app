import styles from './styles.module.scss'
import CourseItem from 'components/CourseItem';

const CourseList = ({courses}) => {    
    return (
        <div className={styles.courseList}>
            {courses.map(item => {
                return <CourseItem 
                    item = {item}
                    key = {item.id}
                />
            })}
        </div>
    )
}

export default CourseList;