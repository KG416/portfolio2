import { TextCard } from '../../style/mainStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const ReposList = ({ repos }) => {
    return (<>
        {repos.map(repo => (
            <TextCard key={repo.id}>
                <h2>{repo.name}</h2>
                <p>{repo.description}</p>
                <a href={repo.html_url}>
                    <FontAwesomeIcon icon={faLaptopCode} />
                </a>
            </TextCard>
        ))}

    </>)
};

export default ReposList;