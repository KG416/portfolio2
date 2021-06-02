import useFetchRepos from '../../hooks/useFetchRepos';
import ProjectsList from './ProjectsList';
import ReposList from './ReposList';
import { projectsArray as projects } from './projectsArray';
import { CardWrapper } from '../../style/mainStyles';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const StyledProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

     h1 {
        margin-top: 120px;
        margin-bottom: 100px;
    }
    
    .second-h1 {
        margin-top: 300px;
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
`;

const Projects = () => {
    const { data: repos, isPending, error } = useFetchRepos('https://api.github.com/users/kg416/repos');
    //console.log(repos);

    return (
        <StyledProjectsContainer>
            <h1>Några projekt jag skapat.</h1>
            <CardWrapper>
                {projects && <ProjectsList projects={projects} />}
            </CardWrapper>

            <a href="#repos" className='arrow'>
                <FontAwesomeIcon icon={faChevronDown} />
            </a>

            <h1 id='repos' className='second-h1'>GitHub Repos.</h1>
            { error && <div>{error}</div>}
            { isPending && <div>loading...</div>}
            <CardWrapper>
                {repos && <ReposList repos={repos} />}
            </CardWrapper>

            <a href="#top-of-page" className='arrow'>
                <FontAwesomeIcon icon={faChevronUp} />
            </a>

        </StyledProjectsContainer>
    )
}
export default Projects;