import { ImgCard } from '../../style/mainStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ProjectsList = ({ projects }) => {
    return (<>
        {projects.map(project => (
            <ImgCard key={project.id}>
                <img
                    src={project.imgPath}
                    alt="project"
                />
                <p>{project.text}</p>
                <a href={project.projectUrl}>Till Hemsidan
                <FontAwesomeIcon icon={faChevronRight} className='a-icon' />
                </a>
                <h3>{project.label}</h3>
            </ImgCard>
        ))}

    </>)
};

export default ProjectsList;