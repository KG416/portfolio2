import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { StyledThemeButton } from '../style/mainStyles';
import styled from 'styled-components';
import { useMainContext } from '../MainContext';

export const StyledNav = styled.nav`
    background-color: ${props => props.theme.background1};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    -webkit-box-shadow: 0 8px 6px -6px ${props => props.theme.background2};
	   -moz-box-shadow: 0 8px 6px -6px ${props => props.theme.background2};
	        box-shadow: 0 8px 6px -6px ${props => props.theme.background3};
ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100px;
}
ul > li {
    color: ${props => props.theme.color1};
    margin: 1vw;
        &:hover{
        text-decoration: underline;
    }
}
li > a, p {
    color: ${props => props.theme.color1};
}
`;

const MainLogo = styled.h2`
    color: ${props => props.theme.funColor};
    border: 1px solid ${props => props.theme.funColor};
    padding: 2px;
    border-radius: 2px;
    margin-left: 2vw;
`;

const Navigation = () => {
    const { theme, themeToggler } = useMainContext();

    return (
        <StyledNav>
            <Link to={ROUTES.HOME}>
                <MainLogo>Karl_G</MainLogo>
            </Link>

            <ul>
                <li>
                    <Link to={ROUTES.PROJECTS}>🏠 Mina Projekt</Link>
                </li>
                <li>
                    <Link to={ROUTES.ABOUT}>👱 Om Mig</Link>
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