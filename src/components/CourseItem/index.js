import { useRef } from 'react'
import { NavLink } from 'react-router-dom'

import IconBlock from 'components/IconBlock'
import SkillsList from 'components/SkillsList/SkillsList'

import rocket from 'assets/icons/rocket-solid.svg'
import starSvg from 'assets/icons/star-regular.svg'

import styles from './styles.module.scss'
import CourseItemPictureHovered from 'components/CourseItemPictureHovered'

const CourseItem = ({item}) => {
    const courseItemRef = useRef(null)
    const getCourseVideoUrl = () => {
        if (item.meta.courseVideoPreview && item.meta.courseVideoPreview.link) return item.meta.courseVideoPreview.link;
        return null
    }

    return (
        <NavLink className={styles.courseitem} to={`/course/${item.id}`} ref={courseItemRef}>
            {/* При ховері, відео без звуку */}
            <CourseItemPictureHovered 
                sourceImage = {item.previewImageLink + '/cover.webp'}
                sourceVideo = {getCourseVideoUrl()}                                      // Якщо немає прев'ю відео, то передавати null
                parentRef = {courseItemRef}
            />
            <div className={styles.courseDescription}>
                <h2> {item.title} </h2>
                <h3> {item.description} </h3>
                <div className={styles.blocks}>
                    <IconBlock 
                        svg = {rocket}
                        text = {`${item.lessonsCount} lessons`}
                    />
                    <IconBlock 
                        svg = {starSvg}
                        text = {item.rating}
                    />
                </div>
                <p className={styles.skills}>Skills:</p>
                <SkillsList list = {item.meta.skills}/>
            </div>
        </NavLink>
    )
}

export default CourseItem;