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
    background-color: rgb(45, 45, 45);
}
h1, h2, h3, img {
    color: white;
}
`;
/* ========================= Navbar =========================*/
export const StyledNav = styled.nav`

    background-color: rgb(23, 23, 23);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
}
ul > li {
    color: white;
    margin: 1vw;
        &:hover {
        text-decoration: underline;
    }
}
li > a {
    color: white;
}
`;