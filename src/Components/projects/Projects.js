import useFetchRepos from '../../hooks/useFetchRepos';
import ProjectsList from './ProjectsList';
import ReposList from './ReposList';
import { projectsArray as projects } from './projectsArray';

const Projects = () => {
    const { data: repos, isPending, error } = useFetchRepos('https://api.github.com/users/kg416/repos');
    //console.log(repos);

    return (
        <>
            <h1>Några projekt jag skapat.</h1>
            { projects && <ProjectsList projects={projects} />}

            <h1>GitHub Repon.</h1>
            { error && <div>{error}</div>}
            { isPending && <div>loading...</div>}
            { repos && <ReposList repos={repos} />}
        </>
    )
}
export default Projects;