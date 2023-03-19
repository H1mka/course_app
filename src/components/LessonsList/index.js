import LessonsItem from 'components/LessonsItem'

import styles from './styles.module.scss'

const LessonsList = ({lessonsInfo}) => {
    
    return (
        <div className={styles.lessonsList}>
            {/* У списку є уроки з type "article", вони будуть закритими, бо в них немає відео */}
            {lessonsInfo.map(item => {
                return <LessonsItem 
                    lesson = {item}
                    key = {item.id}
                />
            })}
        </div>
    )
}

export default LessonsList;