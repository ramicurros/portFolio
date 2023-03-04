function Contact({ contactObj }) {

    return (
        <div className='d-flex justify-content-center align-items-center contact'>
            <a href={contactObj.src}>
                <img className={contactObj.imgClass} src={contactObj.logoSrc} />
            </a>
        </div>
    );

}

export default Contact;