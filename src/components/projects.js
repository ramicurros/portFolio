import ProjectCard from "./projectCard";
import Images from "../images/images";

function Projects() {

    const openTag = '<'

    return (
        <div className='d-flex flex-column justify-content-center align-items-center p-3 p-md-4 p-lg-5rojectWrapper'>
            <span className='projectsTitle mb-3 mb-md-5'>{openTag}Projects /></span>
            <div class='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                <ProjectCard name='Calculator' description='A web developed calculator.' img={Images.calculatorSS} tools={['html', 'css', 'react', 'bootstrap', 'javascript']} code="https://github.com/ramicurros/ReactCalculator-Public.github.io" live=" https://ramicurros.github.io/ReactCalculator-Public/"/>
                <ProjectCard name='Drum Machine' description='A web developed drum machine, with a volume bar and different sound banks.' img={Images.drumPadMachineSS} tools={['html', 'css', 'react', 'bootstrap', 'javascript']} code="https://github.com/ramicurros/Drum-Machine" live="https://ramicurros.github.io/Drum-Machine/"/>
                <ProjectCard name='Markdown Previewer' description='A web developed markdown previewer.' img={Images.markdownPreviewerSS} tools={['html', 'css', 'react', 'bootstrap', 'javascript']} code="https://github.com/ramicurros/markDownPreviewer" live="https://ramicurros.github.io/markDownPreviewer/"/>
                <ProjectCard name='Session-Break Clock' description='A web developed clock, where you can set a session and a break time.' img={Images.clockSS} tools={['html', 'css', 'react', 'bootstrap', 'javascript']} code="https://github.com/ramicurros/react-25-5-clock" live="https://ramicurros.github.io/react-25-5-clock/"/>
                <ProjectCard name='Quote Machine' description='A web developed random quote machine.' img={Images.quoteMachineSS} tools={['html', 'css', 'react', 'bootstrap', 'javascript']} code="https://github.com/ramicurros/Random-Quote-Machine" live="https://ramicurros.github.io/Random-Quote-Machine/"/>
                <ProjectCard name='Documentation Page' description='A fully responsive technical documentation web page about responsive web design.' img={Images.documentationPageSS} tools={['html', 'css']} code="https://github.com/ramicurros/Documentation-Page" live="https://ramicurros.github.io/Documentation-Page/"/>
            </div>
        </div>
    );
}

export default Projects;