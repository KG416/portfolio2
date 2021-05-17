import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {


    const handleSubmit = () => {
        console.log('form submitted');
    };

    return (
        <>
            <h1>Maila mig</h1>
            <h2>kallegunnarsson@hotmail.com</h2>
            <h3>eller tryck här</h3>
            <a href="mailto:kallegunnarsson@hotmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <h3>eller...</h3>
            <form onSubmit={handleSubmit}>
                <h1>Eller skriv direkt</h1>
                <input type="textarea" placeholder='Ditt meddelande...' />
                <h2>Så får du svar hit</h2>
                <input type="text" placeholder='Din mailadress...' />
                <button>Skicka</button>
            </form>
        </>
    )
}
export default Contact;