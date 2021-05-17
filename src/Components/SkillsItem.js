import { skillsArray } from '../skillsDb/SkillsDb';
import styled from 'styled-components';

const CardDiv = styled.div`
    color: ${props => props.theme.color1};
    /* background-color: ${props => props.theme.background2}; */
    margin: 20px;
    padding: 10px;
    h2 {
        color: ${props => props.theme.funColor};
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    p {
        margin-left: 15px;
    }
`;

const SkillsItem = () => {

    return (
        <div className='skills-wrapper'>
            {
                skillsArray.map((skill) => (
                    <CardDiv key={skill.id}>
                        <h2>{skill.title}</h2>
                        <p>{skill.subtitle1}</p>
                        <p>{skill.subtitle2}</p>
                    </CardDiv>
                ))
            }
        </div>
    )
};

export default SkillsItem;