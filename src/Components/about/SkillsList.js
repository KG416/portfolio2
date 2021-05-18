import { skillsArray } from './skillsArray';
import { TextCard } from '../../style/mainStyles';

const SkillsList = () => {

    return (<>
        {
            skillsArray.map((skill) => (
                <TextCard key={skill.id}>
                    <h2>{skill.title}</h2>
                    <p>{skill.subtitle1}</p>
                    <p>{skill.subtitle2}</p>
                </TextCard>
            ))
        }
    </>)
};

export default SkillsList;