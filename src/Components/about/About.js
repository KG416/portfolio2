import { CardWrapper } from '../../style/mainStyles';
import styled from 'styled-components';
import SkillsList from './SkillsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


const StyledAboutContainer = styled.div`
    /* border: 5px solid red; */
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin-top: 200px;
    }

    section {
        p {
            border-bottom: 3px solid ${props => props.theme.funColor};
            transition: border-bottom 0.5s ease-in-out;
            color: ${props => props.theme.color3};
            margin: 40px 0 40px 0;
            padding:  20px 0 30px 0;
            font-size: 1.3em;
            max-width: 600px;
            text-align: center;
        }
    }

    .arrow {
        color: ${props => props.theme.color1};
        cursor: pointer;
        margin-top: 60px;
        font-size: 40px;

        &:hover {
            color: ${props => props.theme.color3};
        }
    }

    .second-h1 {
        margin-top: 400px;
    }
    .second-h3 {
        color: ${props => props.theme.color3};
        margin: 10px 0 80px 0;
        padding-bottom: 30px;
        border-bottom: 3px solid ${props => props.theme.funColor};
        width: 400px;
    }
    /* Medium */
    @media (max-width: 1200px) {
        /* border: 5px solid red; */
        width: 80%;
        
        .second-h1 {
            margin-top: 200px;
        }

    }
    /* Mobile */
    @media (max-width: 760px) {
        /* border: 5px solid green; */
        width: 90%;

         .second-h1 {
            margin-top: 100px;
        }

    }
`;

const About = () => {

    return (
        <StyledAboutContainer>
            <section>
                <h1>Om mig</h1>
                <p>Min kreativa bana började med musik och jag har jobbat mycket som musikproducent och låtskrivare.
                    {/* Min kreativa bana började med musik och som musikproducent och låtskrivare är jag guldbelönad (x3). */}
                    <br /><br />
                    För några år sedan blev jag intresserad av kodning, ett intresse som fortsatte att växa då jag började studera 'Front End Developer' på kyh i Stockholm. Jag tar min examen därifrån i början av sommaren 2022 och ser efter det fram emot att flytta till Nebraska för att jobba på 7-Eleven</p>
            </section>

            <a href="#skills" className='arrow'>
                <FontAwesomeIcon icon={faChevronDown} />
            </a>

            <h1 id='skills' className='second-h1'>Kunskaper</h1>
            <h3 className='second-h3'>Dessa språk och verktyg har jag jobbat med.</h3>
            <CardWrapper>
                <SkillsList />
            </CardWrapper>

            <a href="#about" className='arrow'>
                <FontAwesomeIcon icon={faChevronUp} />
            </a>

        </StyledAboutContainer>
    )
}
export default About;