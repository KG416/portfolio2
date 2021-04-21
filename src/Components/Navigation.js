import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { StyledNav } from '../style/mainStyles';
import { useMainContext } from '../MainContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    const { theme, themeToggler } = useMainContext();

    return (
        <StyledNav>
            <Link to={ROUTES.HOME}>
                <p>Karl_G</p>
            </Link>

            <ul>
                <li>
                    <Link to={ROUTES.PROJECTS}>Mina Projekt</Link>
                </li>
                <li>
                    <Link to={ROUTES.ABOUT}>Om Mig</Link>
                </li>
                <li>
                    <Link to={ROUTES.CONTACT}>Kontakt</Link>
                </li>
                <li>
                    <button onClick={themeToggler}>
                        {theme === 'dark' ?
                            <FontAwesomeIcon icon={faSun} /> :
                            <FontAwesomeIcon icon={faMoon} />}
                    </button>
                </li>
            </ul>
        </StyledNav>
    )
}

export default Navigation;