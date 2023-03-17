import styles from './styles.module.scss'

const IconBlock = props => {
    return (
        <div className={styles.iconBlock}>
            <img src={props.svg} alt="svg"/>
            <p>{props.text}</p>
        </div>
    )
}

export default IconBlock;