import useFetchProjects from '../hooks/useFetchProjects';
import ProjectsList from './ProjectsList';

const Projects = () => {
    const { data: projects, isPending, error } = useFetchProjects('https://api.github.com/users/kg416/repos');

    console.log(projects);

    return (
        <>
            <h1>Mina Projekt</h1>
            { error && <div>{error}</div>}
            { isPending && <div>loading...</div>}
            { projects && <ProjectsList projects={projects} />}
        </>
    )
}
export default Projects;