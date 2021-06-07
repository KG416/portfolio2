import useFetchRepos from '../../hooks/useFetchRepos';
import ProjectsList from './ProjectsList';
import ReposList from './ReposList';
import { projectsArray as projects } from './projectsArray';
import { ImgCardWrapper, TextCardWrapper } from '../../style/mainStyles';
import styled from 'styled-components/macro';
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
    .arrow-up {
        margin-bottom: 60px;
    }
/* Medium */


/* Mobile */
@media (max-width: 760px) {
     h1 {
        margin-top: 80px;
        margin-bottom: 70px;
       /*  width: 60%; */
    }
    .arrow {
        display: none;
    }
    .second-h1 {
        margin-top: 70px;
    }
}

`;

const Projects = () => {
    const { data: repos, isPending, error } = useFetchRepos('https://api.github.com/users/kg416/repos');
    //console.log(repos);

    return (
        <StyledProjectsContainer>
            <h1>Några projekt jag skapat.</h1>
            <ImgCardWrapper>
                {projects && <ProjectsList projects={projects} />}
            </ImgCardWrapper>

            <a href="#repos" className='arrow'>
                <FontAwesomeIcon icon={faChevronDown} />
            </a>

            <h1 id='repos' className='second-h1'>GitHub Repos.</h1>
            { error && <div>{error}</div>}
            { isPending && <div>loading...</div>}
            <TextCardWrapper>
                {repos && <ReposList repos={repos} />}
            </TextCardWrapper>

            <a href="#top-of-page" className='arrow arrow-up'>
                <FontAwesomeIcon icon={faChevronUp} />
            </a>

        </StyledProjectsContainer>
    )
}
export default Projects;