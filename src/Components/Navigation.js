import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { StyledNav, StyledThemeButton } from '../style/mainStyles';
import { useMainContext } from '../MainContext';

const Navigation = () => {
    const { theme, themeToggler } = useMainContext();

    return (
        <StyledNav>
            <Link to={ROUTES.HOME}>
                <p>Karl_G</p>
            </Link>

            <ul>
                <li>
                    <Link to={ROUTES.PROJECTS}>🏠 Mina Projekt</Link>
                </li>
                <li>
                    <Link to={ROUTES.SKILLS}>👱 Om Mig</Link>
                </li>
                <li>
                    <Link to={ROUTES.CONTACT}>📞 Kontakt</Link>
                </li>
                <li>
                    <StyledThemeButton onClick={themeToggler}>
                        {theme === 'dark' ? '🌔' : '🌒'}
                    </StyledThemeButton>
                </li>
            </ul>
        </StyledNav>
    )
}

export default Navigation;