import { useState } from 'react';
import './App.css';

function App() {

  const [language, setLanguage] = useState('english');


  if (language === 'english') {
    return (
      <div id='app-english' className="d-flex flex-row justify-content-center align-items-center App">
        <div id='menu' className='d-flex flex-row justify-content-center align-items-center menu'>
          <span>Ramiro Curros Bastit</span>
          <span>About me</span>
          <span>Proyects</span>
          <span>Skills and tools</span>
          <span>Education</span>
          <span>Contact me</span>
        </div>
        <div id='page' className='d-flex flex-row justify-content-center align-items-center page'>
          <div id='Me'>
            <span>Ramiro Curros Bastit</span>
            <span>I'm a....</span>
            <span>Get in touch with me by using any of the Contact Me. means</span>
            <button>Download Resume</button>
          </div>
          <div id='about-me'>
            <span>ABOUT ME</span>
            <span>
              After finishing highschool i inmediatly knew what i did want to do. I wanted to be a web developer, so i began with my journey in March, 2022.
            </span>
            <span>
              In actuallity im still learning and growing my skill tree to be a better rounded developer, im anxious about gaining new experiences and learning from them.
            </span>
          </div>
          <div id='proyects'>
            Slider proyectsArr={[]} /
          </div>
          <div id='skills-and-tools'>
            <div id='programming-languages'>
              {SkillsAndToolsArr.map(arr, i => {return <SkillsAndTools object={arr[i]} />})}
            </div>
            <div id='libraries-and-frameworks'>
              {SkillsAndToolsArr.map(arr, i => {return <SkillsAndTools object={arr[i]} />})}
            </div>
            <div id='software-and-tools'>
              {SkillsAndToolsArr.map(arr, i => {return <SkillsAndTools object={arr[i]} />})}
            </div>
          </div>
          <div id='education'>
            Certifications certificationsArr={[]}/
          </div>
          <div id='contact-me'>
            Contact /
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id='app-español' className="d-flex flex-row justify-content-center align-items-center App">
        <div id='menu' className='d-flex flex-row justify-content-center align-items-center menu'>
          <span>Ramiro Curros Bastit</span>
          <span>Sobre Mi</span>
          <span>Proyectos</span>
          <span>Habilidades y herramientas</span>
          <span>Educacion</span>
          <span>Contactame</span>
        </div>
        <div id='page' className='d-flex flex-row justify-content-center align-items-center page'>

        </div>
      </div>
    );
  }
}

export default App;
