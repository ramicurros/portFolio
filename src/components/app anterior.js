
import './App.css';
import Certifications from './components/certfications';
import Constructor from './components/constructor';
import Project from './components/project.js';
import Logos from './images/images.js';

const certificationsArr = [
  { text: 'Front End Development Libraries', src: '' },
  { text: 'JavaScript Algorithms and Data Structures', src: '' },
  { text: 'Responsive Web Design', src: '' },
  { text: 'EF SET English Certificate 73/100 (C2 Proficient)', src: '' },
];

const skillsAndToolsArr = [
  { name: 'JavaScript', img: Logos.colorJs, imgClass: 'SnT-javascript-img', wrapperClassName: 'SnT-wrapper SnT-javascript', type: 'programming-languages' },
  { name: 'Html', img: Logos.colorHtml, imgClass: 'SnT-html-img', wrapperClassName: 'SnT-wrapper SnT-html', type: 'programming-languages' },
  { name: 'Css', img: Logos.colorCss, imgClass: 'SnT-css-img', wrapperClassName: 'SnT-wrapper SnT-css', type: 'programming-languages' },
  { name: 'React', img: Logos.colorReact, imgClass: 'SnT-react-img', wrapperClassName: 'SnT-wrapper SnT-react', type: 'libraries-and-frameworks' },
  { name: 'Bootstrap5', img: Logos.colorBootstrap, imgClass: 'SnT-bootstrap-img', wrapperClassName: 'SnT-wrapper SnT-bootstrap', type: 'libraries-and-frameworks' },
  { name: 'Visual Studio Code', img: Logos.colorVsc, imgClass: 'SnT-visualStudioCode-img', wrapperClassName: 'SnT-wrapper SnT-visualStudioCode', type: 'software-and-tools' },
  { name: 'Github', img: Logos.Github, imgClass: 'SnT-github-img', wrapperClassName: 'SnT-wrapper SnT-github', type: 'software-and-tools' }
];

const thisPage = [
  { name: 'JavaScript', img: Logos.colorJs, imgClass: 'SnT-javascript-img', wrapperClassName: 'usedForThisPage-wrapper SnT-javascript', type: 'row' },
  { name: 'Html', img: Logos.colorHtml, imgClass: 'SnT-html-img', wrapperClassName: 'usedForThisPage-wrapper SnT-html', type: 'row' },
  { name: 'Css', img: Logos.colorCss, imgClass: 'SnT-css-img', wrapperClassName: 'usedForThisPage-wrapper SnT-css', type: 'row' },
  { name: 'React', img: Logos.colorReact, imgClass: 'SnT-react-img', wrapperClassName: 'usedForThisPage-wrapper SnT-react', type: 'row1' },
  { name: 'Bootstrap5', img: Logos.colorBootstrap, imgClass: 'SnT-bootstrap-img', wrapperClassName: 'usedForThisPage-wrapper SnT-bootstrap', type: 'row1' },
]

const calculator = {
  title: 'Calculator',
  description: 'A web-developed functional calculator.',
  imgSrc: Logos.CalculatorSS,
  tools: [
    { name: '', img: Logos.projectJs, imgClass: ' project-javascript-img', wrapperClassName: 'projectLogo project-javascript' },
    { name: '', img: Logos.projectHtml, imgClass: ' project-html-img', wrapperClassName: 'projectLogo project-html' },
    { name: '', img: Logos.projectCss, imgClass: ' project-css-img', wrapperClassName: 'projectLogo project-css' },
    { name: '', img: Logos.projectReact, imgClass: ' project-react-img', wrapperClassName: 'projectLogo project-react' },
    { name: '', img: Logos.projectBootstrap, imgClass: ' project-bootstrap-img', wrapperClassName: 'projectLogo project-bootstrap' }
  ]
};
const drumPadMachine = {
  title: 'Drum Pad Machine',
  description: 'A web-developed functional drum-pad machine.',
  imgSrc: Logos.drumPadMachineSS,
  tools: [
    { name: '', img: Logos.projectJs, imgClass: ' project-javascript-img', wrapperClassName: 'projectLogo project-javascript' },
    { name: '', img: Logos.projectHtml, imgClass: ' project-html-img', wrapperClassName: 'projectLogo project-html' },
    { name: '', img: Logos.projectCss, imgClass: ' project-css-img', wrapperClassName: 'projectLogo project-css' },
    { name: '', img: Logos.projectReact, imgClass: ' project-react-img', wrapperClassName: 'projectLogo project-react' },
    { name: '', img: Logos.projectBootstrap, imgClass: ' project-bootstrap-img', wrapperClassName: 'projectLogo project-bootstrap' }
  ]
};
const clock = {
  title: 'Session-Break Clock',
  description: 'A web-developed precise countdown clock with session and break settings that allows you to set a specific amount of time for a work or study session, followed by a break period. Once the session time is up, the break time starts automatically, and vice versa. The clock continuously alternates between the session and break periods until you manually stop it. This helps you to maintain focus during work or study sessions and to take regular breaks, improving productivity and preventing burnout.',
  imgSrc: Logos.clockSS,
  tools: [
    { name: '', img: Logos.projectJs, imgClass: ' project-javascript-img', wrapperClassName: 'projectLogo project-javascript' },
    { name: '', img: Logos.projectHtml, imgClass: ' project-html-img', wrapperClassName: 'projectLogo project-html' },
    { name: '', img: Logos.projectCss, imgClass: ' project-css-img', wrapperClassName: 'projectLogo project-css' },
    { name: '', img: Logos.projectReact, imgClass: ' project-react-img', wrapperClassName: 'projectLogo project-react' },
    { name: '', img: Logos.projectBootstrap, imgClass: ' project-bootstrap-img', wrapperClassName: 'projectLogo project-bootstrap' }
  ]
};
const quoteMachine = {
  title: 'Random Quote Machine',
  description: 'A web-developed random quote machine.',
  imgSrc: Logos.quoteMachineSS,
  tools: [
    { name: '', img: Logos.projectJs, imgClass: ' project-javascript-img', wrapperClassName: 'projectLogo project-javascript' },
    { name: '', img: Logos.projectHtml, imgClass: ' project-html-img', wrapperClassName: 'projectLogo project-html' },
    { name: '', img: Logos.projectCss, imgClass: ' project-css-img', wrapperClassName: 'projectLogo project-css' },
    { name: '', img: Logos.projectReact, imgClass: ' project-react-img', wrapperClassName: 'projectLogo project-react' },
    { name: '', img: Logos.projectBootstrap, imgClass: ' project-bootstrap-img', wrapperClassName: 'projectLogo project-bootstrap' }
  ]
};
const markdown = {
  title: 'Markdown Previewer',
  description: 'A web-developed markdown previewer. A markdown previewer is a useful tool for anyone who wants to create formatted text for the web quickly and easy.',
  imgSrc: Logos.markdownPreviewerSS,
  tools: [
    { name: '', img: Logos.projectJs, imgClass: ' project-javascript-img', wrapperClassName: 'projectLogo project-javascript' },
    { name: '', img: Logos.projectHtml, imgClass: ' project-html-img', wrapperClassName: 'projectLogo project-html' },
    { name: '', img: Logos.projectCss, imgClass: ' project-css-img', wrapperClassName: 'projectLogo project-css' },
    { name: '', img: Logos.projectReact, imgClass: ' project-react-img', wrapperClassName: 'projectLogo roject-react' },
    { name: '', img: Logos.projectBootstrap, imgClass: ' project-bootstrap-img', wrapperClassName: 'projectLogo project-bootstrap' }
  ]
};
const documentationPage = {
  title: 'Technical Documentation Page',
  description: 'A web-developed technical documentation page that talks about responsive-web design, useful for everyone that needs to learn anything about it. Only done with Html and Css.',
  imgSrc: Logos.documentationPageSS,
  tools: [
    { name: '', img: Logos.projectHtml, imgClass: ' project-html-img', wrapperClassName: 'projectLogo project-html' },
    { name: '', img: Logos.projectCss, imgClass: ' project-css-img', wrapperClassName: 'projectLogo project-css' }
  ]
};

const openBracket = '<';

function appAnterior() {

  return (
    <div className="d-flex container-fluid flex-column App">
      <div className='d-flex align-items-center justify-content-between justify-lg-content-end navbarWrapper'>
        <div className='d-flex flex-column align-items-center justify-content-center navbarColumn0'>
          <div className='d-flex flex-column align-items-center justify-content-center logoWrapper'>
            <span>R</span>
          </div>
        </div>
        <div className='d-flex flex-column align-items-center justify-content-center navbarColumn1'>
          <div className='d-flex align-items-center navbarTextWrapper'>
            <span className='navbarText'><a href=''>About Me</a></span>
            <span className='navbarText'><a href=''>Projects</a></span>
            <span className='navbarText'><a href=''>Skills and Certifications</a></span>
          </div>
        </div>
        <div className='d-flex flex-column align-items-center justify-content-center navbarColumn2'>
          <a className='btn btn-primary btn-sm'>Download Resume</a>
        </div>
        <div>

        </div>
      </div>
      <div className='d-flex portfolioWrapper'>
        <div className='d-flex flex-column align-items-center sideColumn'>
          <div className='d-flex align-items-center justify-content-center githubLogo logoBorder'>
            <img src={Logos.Github} className='side-logo github' />
          </div>
          <div className='sideLogosWrapper'>
            <div className='d-flex align-items-center justify-content-center linkednLogo logoBorder'>
              <img src={Logos.linkedn} className='side-logo linkedn' />
            </div>
            <div className='d-flex align-items-center justify-content-center phoneLogo logoBorder'>
              <img src={Logos.phone} className='side-logo phone' />
            </div>
            <div className='d-flex align-items-center justify-content-center gmailLogo logoBorder'>
              <img src={Logos.email} className='side-logo email' />
            </div>
          </div>
        </div>
        <div className='d-flex flex-column page'>
          <div className='d-flex flex-column justify-content-center justify-content-lg-center page-container aboutMeWrapper'>
            <h1 className='display-1 myName'>Ramiro Curros Bastit</h1>
            <div className='aboutMeContainer'>
              <span className='display-6 webDeveloper'>[I'm a web developer]</span>
              <div className='d-flex flex-column aboutMe'>
                <span className='aboutMeTag'>{openBracket}AboutMe></span>
                <div className='aboutMeTextWrapper'>
                  <span className='aboutMeText'>After finishing highschool I immediatly knew what I did want to do. I wanted to be a web developer, so I began with my journey in March, 2022.</span>
                  <br></br>
                  <span className='aboutMeText-1'>In actuality, I'm still learning and growing my skill tree to be a better rounded developer, I'm anxious about gaining new experiences and learning from them.</span>
                </div>
                <span className='aboutMeTag'>{openBracket}AboutMe/></span>
              </div>
            </div>
          </div>
          <div className='d-flex flex-column align-items-center justify-content-center projectsWrapper'>
            <div className='d-flex flex-column align-items-center page-container projectPage'>
              <div className='d-flex align-self-xl-start'>
                <span className='display-3 projects'>{openBracket}Projects /></span>
              </div>
              <Project project={calculator} />
            </div>
            <div className='d-flex justify-content-center align-items-center page-container projectPage'>
              <Project project={clock} />
            </div>
            <div className='d-flex justify-content-center align-items-center page-container projectPage'>
              <Project project={drumPadMachine} />
            </div>
            <div className='d-flex justify-content-center align-items-center page-container projectPage'>
              <Project project={quoteMachine} />
            </div>
            <div className='d-flex justify-content-center align-items-center page-containerprojectPage'>
              <Project project={markdown} />
            </div>
            <div className='d-flex justify-content-center align-items-center page-container projectPage'>
              <Project project={documentationPage} />
            </div>
          </div>
          <div className='d-flex flex-column page-container skillsAndToolsPage'>
            <div className='d-flex flex-column flex-xl-row aling-xl-self-start skillsAndToolsRow'>
              <div className='d-flex flex-column skillsAndTools'>
                <span className='skillsAndTools-txt'>Programming Languages</span>
                <div className='d-flex  flex-column flex-sm-row skillsAndTools-row'>
                  {skillsAndToolsArr.map((x) => { return <Constructor object={x} type='programming-languages' /> })}
                </div>

                <span className='skillsAndTools-txt'>Libraries and Frameworks</span>
                <div className='d-flex flex-column flex-sm-row skillsAndTools-row'>
                  {skillsAndToolsArr.map((x) => { return <Constructor object={x} type='libraries-and-frameworks' /> })}
                </div>

                <span className='skillsAndTools-txt'>Software and Tools</span>
                <div className='d-flex flex-column flex-sm-row skillsAndTools-row'>
                  {skillsAndToolsArr.map((x) => { return <Constructor object={x} type='software-and-tools' /> })}
                </div>

              </div>
              <div className='d-flex flex-column education'>
                <span className='Education'>Education</span>
                {certificationsArr.map((x) => { return <Certifications certification={x} /> })}
              </div>
            </div>
            <div className='d-flex flex-column-reverse flex-lg-row aling-lg-self-end skillsAndToolsRow1'>
              <div className='d-flex flex-column thisWebsite'>
                <span>/* Used for this website. */</span>
                <div className='d-flex  flex-column align-items-center align-items-sm-start flex-sm-row thisWebsite1'>
                  {thisPage.map((x) => { return <Constructor object={x} type='row' /> })}
                </div>
                <div className='d-flex  flex-column align-items-center align-items-sm-start flex-sm-row thisWebsite2'>
                  {thisPage.map((x) => { return <Constructor object={x} type='row1' /> })}
                </div>
              </div>
              <div className='d-flex flex-column align-self-lg-end contactMe'>
                <div className='d-flex align-items-center email'>
                  <img className='contact-email' src={Logos.email}></img><span>ramicurros@gmail.com</span>
                </div>
                <div className='d-flex align-items-center phone'>
                  <img className='contact-phone' src={Logos.phone}></img><span>+54 11 2627-7005</span>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}

export default appAnterior;
