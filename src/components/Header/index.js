import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss'

const Header = () => {
    return (
        <header>
            <NavLink to="/">Genesis School</NavLink>
        </header>
    )
}

export default Header;