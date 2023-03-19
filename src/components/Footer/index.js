import styles from './styles.module.scss'

const Footer = () => {
    return (
        <footer>
            <div>Terms of Use · Privacy Policy</div>
            <div className={styles.copyright}>&copy; 2016 Genesis School</div>
        </footer>
    )
}

export default Footer;