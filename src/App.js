import Menu from './components/navbar';
import SideBar from './components/sideBar';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import SkillsAndCertifications from './components/skillsAndCertifications'
import './App.css';

function App() {

  return (
    <>
      <Menu />
      <div className="container-fluid p-0">
        <div className="d-flex flex-row portfolioWrapper">
          <div className="d-lg-flex d-none flex-column align-items-center justify-content-center h-100 sideBar">
            <SideBar />
          </div>
          <div id='aboutMe' className="d-flex flex-column justify-content-center w-100 page">
            <div className='d-flex flex-column justify-content-center align-items-start section-container'>
              <AboutMe />
            </div>
            <div id='projects' className='d-flex flex-column justify-content-center align-items-center section-container'>
              <Projects />
            </div>
            <div id='skillsAndCertifications' className='d-flex flex-column justify-content-center  align-items-start section-container'>
              <SkillsAndCertifications />
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}

export default App;
