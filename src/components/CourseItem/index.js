import { NavLink } from 'react-router-dom'

import IconBlock from 'components/IconBlock'
import SkillsList from 'components/SkillsList/SkillsList'

import rocket from 'assets/icons/rocket-solid.svg'
import starSvg from 'assets/icons/star-regular.svg'

import styles from './styles.module.scss'

const CourseItem = props => {
    
    return (
        <NavLink className={styles.courseitem} to={`/course/${props.id}`}>             {/* div ? article */}
            {/* <div className={styles.img}>Image</div> */}
            <img className={styles.img} src = {props.image + '/cover.webp'} alt="course preview"/>
            <div className={styles.courseDescription}>
                <h2>{props.headline}</h2>
                <h3>{props.courseHeadline}</h3>
                <div className={styles.blocks}>
                    <IconBlock 
                        svg = {rocket}
                        text = {`${props.lessonsCount} lessons`}
                    />
                    <IconBlock 
                        svg = {starSvg}
                        text = {props.rating}
                    />
                </div>
                <p className={styles.skills}>Skills:</p>
                <SkillsList list = {props.skills}/>
            </div>
        </NavLink>
    )
}

export default CourseItem;