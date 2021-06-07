import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ImgCardWrapper, TextCard, MailForm } from '../style/mainStyles';
import styled from 'styled-components/macro';

const StyledContactContainer = styled.div`
    /* border: 2px solid green; */

    h1 {
        margin: 20px 0;
    }
    .mail-1 {
        height: 130px;
    }
    h3 {
        margin: 10px 0;
        font-size: 1.2em;
    }
    span {
        color: red;
    }
`;

const Contact = () => {

    const handleSubmit = () => {
        alert('Did not send. This function is under construction...')
    };

    return (<StyledContactContainer>
        <h1>Kontakt</h1>
        <div className="mail-container">
            <ImgCardWrapper>
                <TextCard className='mail-1'>
                    <h2>Maila mig</h2>
                    <p>kallegunnarsson@hotmail.com</p>
                    <a href="mailto:kallegunnarsson@hotmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </TextCard>
            </ImgCardWrapper>

            <h3>eller...</h3>
            <ImgCardWrapper>
                <TextCard>
                    <MailForm onSubmit={handleSubmit}>
                        <h2>Skriv här... <span> (Not in use) </span></h2>
                        <textarea className='mail-input' placeholder='Ditt meddelande...' />
                        <h2>...och få svar hit</h2>
                        <input className='mail-input mail-address' type="text" placeholder='Din mailadress...' />
                        <button>Skicka</button>
                    </MailForm>
                </TextCard>
            </ImgCardWrapper>
        </div>

    </StyledContactContainer>)
}
export default Contact;