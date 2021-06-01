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

    transition: 0.5s ease-in-out;

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
    text-align: center;
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

    margin-bottom: 100px;

    h1 {
        margin-top: 120px;
        margin-bottom: 100px;
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ImgCard = styled.div`
    color: ${props => props.theme.color1};
    background-color: ${props => props.theme.background2};
    box-shadow: 0px 0px 5px 2px ${props => props.theme.shadow};

    /* position: relative; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px;
    padding: 15px;
    width: 350px;
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

       /*  -webkit-box-shadow: 0px -2px 3px -2px ${props => props.theme.background2};
	    -moz-box-shadow: 0px -2px 3px -2px ${props => props.theme.background2}; */
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

export const TextCard = styled.div`
    color: ${props => props.theme.color1};
    background-color: ${props => props.theme.background2};
    box-shadow: 0px 0px 5px 2px ${props => props.theme.shadow};

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

export const MailForm = styled.form`
    display: flex;
    flex-direction: column;

    h2 {
        margin-left: 17px;
        margin-top: 30px;
    }

    .mail-input {
        /* box-shadow: 0px 0px 5px 2px ${props => props.theme.background3}; */
        border: 1px solid ${props => props.theme.background3};
        font-size: 16px;
        align-self: center;
        border-radius: 5px;
        width: 95%;
        margin: 5px;
        padding: 10px;
    }

    textarea {
        height: 200px;
        resize: none;
    }
    .mail-address {
        height: 40px;
    }
    button {
        color: ${props => props.theme.color1};
        font-size: 16px;
        background-color: ${props => props.theme.background2};
        border: 1px solid ${props => props.theme.color3};
        cursor: pointer;
        border-radius: 5px;
        align-self: center;
        width: 50%;
        height: 40px;
        margin-top: 30px;
        transition: background-color 0.1s ease-in-out;

        &:hover {
            background-color: ${props => props.theme.background3};
        }
    }
`;