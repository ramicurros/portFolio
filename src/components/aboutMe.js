function AboutMe() {

    const openTag = '<'

    return (
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center w-100 aboutMeWrapper p-3 p-md-4 p-lg-5">
            <div className='d-flex flex-column justify-content-center align-items-start aboutMe me-0 me-md-3 me-lg-5'>
                <span className="myName">Ramiro Curros Bastit</span>
                <div>
                    <div className="aboutMe-wrapper1">
                        <span className="web-developer">[I'm a web developer]</span>
                        <div className="aboutMe-description">
                            <span>{openTag}AboutMe></span>
                            <div className="p-2 aboutMe-txt">
                                <span>After finishing highschool I immediatly knew what I did want to do. I wanted to be a web developer, so I began with my journey in March, 2022.</span>
                                <br></br>
                                <span>In actuality, I'm still learning and growing my skill tree to be a better rounded developer, I'm anxious about gaining new experiences and learning from them.</span>
                            </div>
                            <span>{openTag}AboutMe /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='m-2 p-2 p-md-3'>
                <img src="https://media.tenor.com/2uyENRmiUt0AAAAC/coding.gif" className='img-fluid'></img>
            </div>
        </div >
    );
}

export default AboutMe;