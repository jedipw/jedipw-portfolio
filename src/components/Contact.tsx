import ContactTitle from './contact/ContactTitle';
import ContactInfo from './contact/ContactInfo';

function Contact() {
    return <div id="contact" className="container-fluid d-flex justify-content-center align-items-center min-vh bg-green-3 p-5">
        <div className="text-center container-fluid">
            <ContactTitle>Get in touch with me!</ContactTitle>
            <ContactInfo />
        </div>
    </div>
}

export default Contact;