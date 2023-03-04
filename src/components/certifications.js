
function Certification({ certification }) {

    return (
        <div className="d-flex flex-row justify-content-center certifications">
            {certification.name}
            <div className="redirect">
                <a href={certification.link}>Certification</a>
            </div>
        </div>
    );
}


export default Certification;