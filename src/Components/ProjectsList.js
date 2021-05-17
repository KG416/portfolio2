const ProjectsList = ({ projects }) => {
    return (
        <div>
            {projects.map(project => (
                <div key={project.id}>
                    <h2>{project.name}</h2>
                    <p>URL: {project.url}</p>
                </div>
            ))}
        </div>
    )
};

export default ProjectsList;