import styled, { createGlobalStyle } from 'styled-components';

/* ========================= Global Styles =========================*/
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
export const PageWrapper = styled.div`
    /* background-color: orange; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        margin: 40px;
    }
`;

export const TextCard = styled.div`
    color: ${props => props.theme.color1};
    background-color: ${props => props.theme.background2};
    margin: 10px;
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

export const ImgCard = styled.div`
    color: ${props => props.theme.color1};
    background-color: ${props => props.theme.background2};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px;
    padding: 15px;
    width: 400px;
    border-radius: 5px;
    h3 {
        color: ${props => props.theme.color1};
        font-size: 16px;
        align-self: flex-end;
        padding: 5px;
        margin: 10px;
        font-weight: bold;
        border-radius: 2px;
        position: relative;

        -webkit-box-shadow: 0px -2px 8px -2px ${props => props.theme.background2};
	    -moz-box-shadow: 0px -2px 8px -2px ${props => props.theme.background2};
	    box-shadow: 0px -2px 3px -2px ${props => props.theme.background3};
    }
    p {
        align-self: flex-start;
        margin-left: 15px;
        margin: 10px;
        max-width: 300px;
    }
    a {
        color: ${props => props.theme.color1};
        margin-left: 40px;
    }
    img {
    max-width: 98%;
    border-radius: 2px;
    }
`;

