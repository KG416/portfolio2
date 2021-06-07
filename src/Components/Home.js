import styled from 'styled-components/macro';

const StyledHomeDiv = styled.div`

    & > h1 {
        margin-top: 100px;
        font-size: 5em;
    }
     & > h2 {
        text-align: center;
        color: ${props => props.theme.color1};
        font-size: 3.3em;
    }

    /* Medium */


    /* Mobile */
    @media (max-width: 760px) {
         & > h1 {
        margin-top: 50px;
        font-size: 2.6em;
    }

    & > h2 {
        font-size: 1.5em;
    }
    }

`;

const Home = () => {
    return (
        <StyledHomeDiv>
            <h1>Karl Gunnarsson</h1>
            <h2>Front End Developer</h2>
        </StyledHomeDiv>
    )
}
export default Home;