import { skillsArray } from './SkillsArray';
import { MainCard } from '../../style/mainStyles';

const SkillsItem = () => {

    return (
        <div className='skills-wrapper'>
            {
                skillsArray.map((skill) => (
                    <MainCard key={skill.id}>
                        <h2>{skill.title}</h2>
                        <p>{skill.subtitle1}</p>
                        <p>{skill.subtitle2}</p>
                    </MainCard>
                ))
            }
        </div>
    )
};

export default SkillsItem;