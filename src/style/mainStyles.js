import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    border: none;
    text-decoration: none;
    &:focus {
        outline: none;
    }
}
html {
    background-color: ${props => props.theme.background1}
}
h1 {
    font-size: 3em;
    color: ${props => props.theme.color1};
    text-align: center;
}
h3 {
    color: ${props => props.theme.color1};
    margin: 50px;
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
        &:hover{
        text-decoration: underline;
    }
}
li > a, p {
    color: ${props => props.theme.color1};
}
`;

/* ========================= Buttons =========================*/
export const StyledThemeButton = styled.button`
    background-color: transparent;
    font-size: 30px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
`;

/* ========================= Content =========================*/
export const MainCard = styled.div`
    color: ${props => props.theme.color1};
    background-color: ${props => props.theme.background2};
    margin: 30px;
    padding: 15px;
    width: 400px;
    border-radius: 5px;
    h2 {
        color: ${props => props.theme.funColor};
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    p {
        margin-left: 15px;
        margin: 10px;
        max-width: 300px;
    }
    a {
        color: ${props => props.theme.color1};
        margin-left: 40px;
    }
`;