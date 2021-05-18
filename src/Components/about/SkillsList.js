import { skillsArray } from './skillsArray';
import { TextCard } from '../../style/mainStyles';

const SkillsList = () => {

    return (
        <div className='skills-wrapper'>
            {
                skillsArray.map((skill) => (
                    <TextCard key={skill.id}>
                        <h2>{skill.title}</h2>
                        <p>{skill.subtitle1}</p>
                        <p>{skill.subtitle2}</p>
                    </TextCard>
                ))
            }
        </div>
    )
};

export default SkillsList;