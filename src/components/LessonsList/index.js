import LessonsItem from 'components/LessonsItem'

import styles from './styles.module.scss'

const LessonsList = ({lessonsInfo}) => {
    
    return (
        <div className={styles.lessonsList}>
            {/* У списку є уроки з type "article", вони будуть закритими, бо в них немає відео */}
            {/* Іноді з api приходять уроки не в правильному порядку, тому сортую їх за зростанням */}
            {lessonsInfo.sort((item1, item2) => item1.order - item2.order).map(item => {
                return <LessonsItem 
                    lesson = {item}
                    key = {item.id}
                />
            })}
        </div>
    )
}

export default LessonsList;