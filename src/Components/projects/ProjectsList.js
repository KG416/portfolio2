import { MainCard } from '../../style/mainStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const ProjectsList = ({ projects }) => {
    return (<>
        {projects.map(project => (
            <MainCard key={project.id}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <a href={project.html_url}>
                    <FontAwesomeIcon icon={faLaptopCode} />
                </a>
            </MainCard>
        ))}

    </>)
};

export default ProjectsList;