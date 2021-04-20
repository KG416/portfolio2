import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

const Navigation = () => {
    return (
        <nav>
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
        </nav>
    )
}

export default Navigation;