import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}
html {
    background-color: ${props => props.theme.background1}
}
h1, h2, h3 {
    font-size: 3em;
    color: ${props => props.theme.color1}
}
`;
/* ========================= Navbar =========================*/
export const StyledNav = styled.nav`

    background-color: ${props => props.theme.background1};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 80px;
}
ul > li {
    color: ${props => props.theme.color1};
    margin: 1vw;
        &:hover {
        text-decoration: underline;
    }
}
li > a, p {
    color: ${props => props.theme.color1};
}
`;