import styled, { createGlobalStyle } from 'styled-components/macro';

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
    background-color: ${props => props.theme.background1};
    scroll-behavior: smooth;
}
html, h1, h2 {
    transition: background-color 0.5s ease-in-out;
}
h1 {
    font-size: 3em;
    color: ${props => props.theme.color1};
    text-align: center;
    max-width: 100vw;
}
h3 {
    font-size: 1.6em;
    color: ${props => props.theme.color1};
    /* margin: 50px; */
    text-align: center;
}

/* Medium */


/* Mobile */
@media (max-width: 760px) {
h1 {
    font-size: 2.6em;
}
h3 {
    font-size: 1.6em;
    /* margin: 50px; */
}
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
/* export const PageWrapper = styled.div`
    border: 5px solid green;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 760px) {
        max-width: 100vw;
        padding: 100px;
    }

`; */

export const ImgCardWrapper = styled.div`
    /* border: 2px solid red; */
    display: flex;
    justify-content: center;
    /* padding: 0 50px 0 50px; */

    @media (max-width: 1550px) {
        flex-wrap: wrap;
    }

    @media (max-width: 760px) {
        
    }
`;

export const TextCardWrapper = styled.div`
    /* border: 2px solid orange; */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
    @media (max-width: 760px) {
     
    }
`;

export const ImgCard = styled.div`
    color: ${props => props.theme.color1};
    background-color: ${props => props.theme.background2};
    box-shadow: 0px 0px 5px 2px ${props => props.theme.shadow};

    transition: background-color 0.5s ease-in-out;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin: 15px;
    /* padding: 15px; */
    width: 350px;
    height: 350px;
    border-radius: 5px;

    img {
    position: absolute;
    top: 15px;
    width: 90%;
    height: 67%;
    border-radius: 5px;
    z-index: 1;
    transition: 0.2s ease-in-out;
    }

    &:hover img {
            transform: translateY(-100px);
        }
    &:hover p, &:hover a {
            opacity: 1;
        }
    &:hover h3 {
        opacity: 0;
    }
    p {
        opacity: 0;
        align-self: flex-start;
        margin-left: 20px;
        margin-bottom: 25px;
        max-width: 300px;
        transition: 0.2s ease-in-out;
    }

    /* To Website Button */
    a {
        color: ${props => props.theme.color1};
        background: transparent;
        border: 1px solid ${props => props.theme.funColor};
        cursor: pointer;
        align-self: flex-start;
        margin-left: 20px;
        margin-bottom: 15px;
        padding: 10px 15px 10px 15px;
        border-radius: 50px;
        font-weight: bold;

        opacity: 0;
        transition: 0.2s ease-in-out;

        &:hover {
            background: ${props => props.theme.funColor};
            color: ${props => props.theme.background1};
            border: 1px solid ${props => props.theme.funColor};
            box-shadow: 0px 0px 3px 0px ${props => props.theme.color1};
        }
    }

    .a-icon {
        margin-left: 8px;
    }

    h3 {
        color: ${props => props.theme.color1};
        font-size: 16px;
        align-self: flex-end;
        padding: 5px;
        margin: 10px;
        font-weight: bold;
        border-radius: 2px;
        position: relative;
        transition: 0.2s ease-in-out;
	    box-shadow: 0px -2px 3px -2px ${props => props.theme.background3};
    }

    /* Mobile */
    @media (max-width: 760px) {
        margin: 15px 0;
    }

`;

export const TextCard = styled.div`
    /* border: 2px solid blue; */
    color: ${props => props.theme.color1};
    background-color: ${props => props.theme.background2};
    box-shadow: 0px 0px 5px 2px ${props => props.theme.shadow};
    transition: background-color 0.5s ease-in-out;

    margin: 10px;
    padding: 15px;
    width: 100%;
    max-width: 400px;
    border-radius: 5px;

    h2, p, a {
        transition: background-color 0.5s ease-in-out;
    }

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
        padding: 5px;
        border: transparent;

        &:hover {
            color: ${props => props.theme.funColor};
        }
    }

    @media (max-width: 760px) {
            margin: 10px 0;

        h2 {
            font-size: 1.4em;
        }
    }

`;

export const MailForm = styled.form`
    /* border: 2px solid orange; */
    display: flex;
    flex-direction: column;

    h2 {
        margin-left: 17px;
        margin-top: 30px;
    }

    .mail-input {
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
        background: transparent;
        border: 1px solid ${props => props.theme.funColor};
        align-self: center;
        cursor: pointer;
        margin: 15px;
        padding: 10px 50px 10px 50px;
        border-radius: 50px;
        font-weight: bold;

        transition: 0.2s ease-in-out;

        &:hover {
            background: ${props => props.theme.funColor};
            color: ${props => props.theme.background1};
            border: 1px solid ${props => props.theme.funColor};
            box-shadow: 0px 0px 3px 0px ${props => props.theme.color1};
        }
    }
`;