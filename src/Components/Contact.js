import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CardWrapper, TextCard, MailForm } from '../style/mainStyles';
import styled from 'styled-components';

const StyledContactContainer = styled.div`
    /* border: 2px solid green; */

    h1 {
        margin: 80px 0 50px 0;
    }
    .mail-1 {
        height: 130px;
    }
    h3 {
        margin: 10px;
        font-size: 1.2em;
    }

     /* Medium */
    @media (max-width: 1200px) {
        /* border: 5px solid red; */

         .mail-container {
            flex-direction: column;
        }
    }

    /* No new styles for mobile yet */

`;

const Contact = () => {

    const handleSubmit = () => {
        console.log('form submitted');
    };

    return (<StyledContactContainer>
        <h1>Kontakt</h1>
        <div className="mail-container">
            <CardWrapper>
                <TextCard className='mail-1'>
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
        </div>

    </StyledContactContainer>)
}
export default Contact;