import LessonsItem from 'components/LessonsItem'

const LessonsList = ({lessonsInfo}) => {
    
    return (
        <div>
            <br/><br/><br/><br/><br/><br/>
            {/* Використовую фильтр, щоб не виводити уроки з типом 'article', в тз сказано тільки про відео */}
            {/* {lessonsInfo.filter(item => item.type === "video").map((item, index) => {
                return <LessonsItem 
                    lesson = {item}
                    lessonIndex = {index + 1}
                    key = {item.id}
                />
            })} */}
            {lessonsInfo.map(item => {
                return <LessonsItem 
                    lesson = {item}
                    key = {item.id}
                />
            })}
            <br/><br/><br/><br/><br/>
        </div>
    )
}

export default LessonsList;