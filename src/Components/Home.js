import styled from 'styled-components';

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