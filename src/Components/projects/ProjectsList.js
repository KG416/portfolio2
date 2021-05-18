import { ImgCard } from '../../style/mainStyles';

const ProjectsList = ({ projects }) => {
    return (<>
        {projects.map(project => (
            <ImgCard key={project.id}>
                <img
                    src={project.imgPath}
                    alt="project image"
                />
                <p>{project.text}</p>
                <h3>{project.label}</h3>
            </ImgCard>
        ))}

    </>)
};

export default ProjectsList;