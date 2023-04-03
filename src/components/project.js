import Constructor from "./constructor";
import Logos from '../images/images';

function Project({ project }) {
    return (
        <div className='d-flex flex-column flex-xl-row justify-content-center align-items-center projectWrapper'>
            <div className='d-flex flex-column aboutProject'>
                <span className="d-flex align-self-center align-self-xl-start display-6 projectTitle">{project.title}</span>
                <div className='d-flex logos-description-wrapper'>
                    <div className='d-flex flex-column justify-content-center align-items-center align-self-center projectToolsWrapper'>
                        {project.tools.map((x) => { return <Constructor object={x} /> })}
                    </div>
                    <span className='projectDescription'>{project.description}</span>
                </div>
                <div className='d-flex flex-row justify-content-evenly'>
                    <div className="projectLogo liveLogo">
                        <img src={Logos.live} className='img-fluid' />
                    </div>
                    <div className="projectLogo codeLogo">
                        <img src={Logos.code} className='img-fluid' />
                    </div>
                </div>
            </div>
            <div className="d-flex project-img-wrapper ">
                <img src={project.imgSrc} className='img-fluid project-img' />
            </div>

        </div>
    );
}

export default Project;