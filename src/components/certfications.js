import Logos from '../images/images';

function Certifications({ certification }) {
    return (
        <div className='certification'>
            <span>{certification.text}<a className='certification-redirect' href={certification.src}>Certification<img className='redirection-logo' src={Logos.Redirect} /></a></span>
        </div>
    );
}

export default Certifications;