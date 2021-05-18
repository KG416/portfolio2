import useFetchRepos from '../../hooks/useFetchRepos';
import ProjectsList from './ProjectsList';
import ReposList from './ReposList';
import { projectsArray as projects } from './projectsArray';
import { CardWrapper } from '../../style/mainStyles';

const Projects = () => {
    const { data: repos, isPending, error } = useFetchRepos('https://api.github.com/users/kg416/repos');
    //console.log(repos);

    return (
        <>
            <h1>Några projekt jag skapat.</h1>
            <CardWrapper>
                {projects && <ProjectsList projects={projects} />}
            </CardWrapper>

            <h1>GitHub Repos.</h1>
            { error && <div>{error}</div>}
            { isPending && <div>loading...</div>}
            <CardWrapper>
                {repos && <ReposList repos={repos} />}
            </CardWrapper>
        </>
    )
}
export default Projects;