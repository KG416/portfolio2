import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CardWrapper, TextCard } from '../style/mainStyles';

const Contact = () => {

    const handleSubmit = () => {
        console.log('form submitted');
    };

    return (<>
        <h1>Kontakt</h1>
        <CardWrapper>
            <TextCard>
                <h2>Maila mig</h2>
                <p>kallegunnarsson@hotmail.com</p>
                <a href="mailto:kallegunnarsson@hotmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </TextCard>
        </CardWrapper>

        <h3>eller...</h3>
        <CardWrapper>
            <TextCard>
                <form onSubmit={handleSubmit}>
                    <h2>Skriv här...</h2>
                    <input type="textarea" placeholder='Ditt meddelande...' />
                    <h2>...och få svar hit</h2>
                    <input type="text" placeholder='Din mailadress...' />
                    <button>Skicka</button>
                </form>
            </TextCard>
        </CardWrapper>
    </>)
}
export default Contact;