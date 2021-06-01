import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CardWrapper, TextCard, MailForm } from '../style/mainStyles';

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
                <MailForm onSubmit={handleSubmit}>
                    <h2>Skriv här...</h2>
                    <textarea className='mail-input' placeholder='Ditt meddelande...' />
                    <h2>...och få svar hit</h2>
                    <input className='mail-input mail-address' type="text" placeholder='Din mailadress...' />
                    <button>Skicka</button>
                </MailForm>
            </TextCard>
        </CardWrapper>
    </>)
}
export default Contact;