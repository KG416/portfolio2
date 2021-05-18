import { CardWrapper } from '../../style/mainStyles';
import SkillsList from './SkillsList';

const About = () => {

    return (
        <>
            <h1>Om mig</h1>
            <h3>Karl</h3>

            <h1>Kunskaper</h1>
            <h3>Dessa språk och verktyg har jag jobbat med.</h3>
            <CardWrapper>
                <SkillsList />
            </CardWrapper>
        </>
    )
}
export default About;