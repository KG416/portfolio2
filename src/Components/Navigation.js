import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { StyledNav } from '../style/mainStyles';

const Navigation = () => {
    return (
        <StyledNav>
            <Link to={ROUTES.HOME}>
                <img alt="logo" />
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
            </ul>
        </StyledNav>
    )
}

export default Navigation;