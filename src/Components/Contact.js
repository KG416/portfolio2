import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MainCard } from '../style/mainStyles';

const Contact = () => {

    const handleSubmit = () => {
        console.log('form submitted');
    };

    return (<>
        <h1>Kontakt</h1>
        <MainCard>
            <h2>Maila mig</h2>
            <p>kallegunnarsson@hotmail.com</p>
            <a href="mailto:kallegunnarsson@hotmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </MainCard>


        <h3>eller...</h3>
        <MainCard>
            <form onSubmit={handleSubmit}>
                <h2>Skriv direkt...</h2>
                <input type="textarea" placeholder='Ditt meddelande...' />
                <h2>...och få svar hit</h2>
                <input type="text" placeholder='Din mailadress...' />
                <button>Skicka</button>
            </form>
        </MainCard>
    </>)
}
export default Contact;