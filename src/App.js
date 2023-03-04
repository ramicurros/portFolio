import { useState } from 'react';
import './App.css';
import Creator from './components/Creator';
import Certification from './components/certifications';
import Contact from './components/contact';

const SkillsAndToolsArr = [{ name: 'Html', type: 'programming-languages', img: '', imgClass: 'html-img', class: 'html' },
{ name: 'Css', type: 'programming-languages', img: '', imgClass: 'Css-img', class: 'css' },
{ name: 'JavaScript', type: 'programming-languages', img: '', imgClass: 'JS-img', class: 'javascript' },
{ name: 'React', type: 'libraries-and-frameworks', img: '', imgClass: 'React-img', class: 'react' },
{ name: 'Github', type: 'software-and-tools', img: '', imgClass: 'Github-img', class: 'github' },
{ name: 'Boostrap5', type: 'libraries-and-frameworks', img: '', imgClass: 'Boostrap-img', class: 'boostrap5' },
{ name: 'Visual Studio Code', type: 'software-and-tools', img: '', imgClass: 'VSC-img', class: 'vsc' },
];

const ThisPage = [{ name: 'Html', type: 'used-for-this-page', img: '', imgClass: 'html-img', class: 'html' },
{ name: 'Css', type: 'used-for-this-page', img: '', imgClass: 'Css-img', class: 'css' },
{ name: 'JavaScript', type: 'used-for-this-page', img: '', imgClass: 'JS-img', class: 'javascript' },
{ name: 'React', type: 'used-for-this-page', img: '', imgClass: 'React-img', class: 'react' },
{ name: 'Boostrap5', type: 'used-for-this-page', img: '', imgClass: 'Boostrap-img', class: 'boostrap5' }]

const CertificationsArr = [{ name: 'Front End Development Libraries', link: 'https://www.freecodecamp.org/certification/Kiw1/front-end-development-libraries' },
{ name: 'JavaScript Algorithms and Data Structures', link: 'https://www.freecodecamp.org/certification/Kiw1/javascript-algorithms-and-data-structures' },
{ name: 'Responsive Web Design', link: 'https://www.freecodecamp.org/certification/Kiw1/responsive-web-design' },
{ name: 'EF SET English Certificate 73/100 (C2 Proficient)', link: 'https://www.efset.org/cert/8bmJma' },];

const ContactArr = [{ name: 'Instagram', imgClass: 'Instagram', src: '' }, { name: 'Gmail', imgClass: 'Gmail', src: '' }, { name: 'WhatsApp', imgClass: 'WhatsApp', src: '' }, { name: 'Github', imgClass: 'Github', src: '' }];

const details = { openTag: '<>', closeTag: '< />', openKey: '{', closeKey: '}', openArr: '[', closeArr: ']', buttonOpen: '<button>', buttonClose: '</button>', openParenthesis: '(', closeParenthesis: ')'}

function App() {

  const [language, setLanguage] = useState('english');

  const name = `<RamiroCurrosBastit />`


  if (language === 'english') {
    return (
      <div id='app-english' className="d-flex flex-row justify-content-start App">
        <div id='menu' className='d-flex flex-column justify-content-center align-items-start menu'>
          <img src='https://cdn-icons-png.flaticon.com/512/4974/4974463.png' className='align-self-center developer-icon'/>
          <span className='align-self-center rcb'>{name}</span>
          <span className='menu-text'>About me</span>
          <span className='menu-text'>Proyects</span>
          <span className='menu-text'>Skills and tools</span>
          <span className='menu-text'>Education</span>
          <span className='menu-text'>Contact me</span>
        </div>
        <div id='page' className='d-flex flex-column justify-content-center align-items-center page'>
          <div id='Me' className='d-flex flex-column justify-content-center align-items-center section-1'>
            <div className='d-flex flex-column Me'>
              <div className='d-flex flex-row justify-content-center align-items-center my-name'>
                <span className='Ramiro'>Ramiro</span> <span className='Curros-Bastit'>${details.openKey}Curros Bastit{details.closeKey}</span>
              </div>
              <span className='ImA'>{details.openArr}I'm a....{details.closeArr}</span>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <span className='section-1-txt'>Get in touch with me by using any of the <a href=''>Contact Me.</a> means.</span>
                <a href=''>
                  <button className='downloadCv'>{details.buttonOpen} Download Resume {details.buttonClose}</button>
                </a>
              </div>
            </div>
          </div>
          <div id='about-me' className='d-flex flex-column justify-content-center section-2'>
            <div className='d-flex flex-column about-me'>
              <span className='AboutMe'>/* About Me</span>
              <span className='AboutMe-text abt-text-0'>
                After finishing highschool i immediatly knew what i did want to do. I wanted to be a web developer, so i began with my journey in March, 2022.
              </span>
              <span className='AboutMe-text abt-text-1'>
                In actuality, im still learning and growing my skill tree to be a better rounded developer, im anxious about gaining new experiences and learning from them.
              </span>
              <span className='AboutMe'>*/</span>
            </div>
          </div>
          <div id='proyects' className='d-flex flex-column justify-content-center align-items-center section-3'>
            <div className='d-flex flex-column proyects'>
              Slider proyectsArr={[]} /
            </div>
          </div>
          <div id='skills-and-tools' className='d-flex flex-column justify-content-center section-4'>
            <div className='d-flex flex-column skills-and-tools'>
              <div id='programming-languages' className='d-flex flex-column justify-content-center programming-languages'>
                <span className='SnT-title'>Programming Languages</span>
                <div className='d-flex flex-row SnT-items'>
                  {SkillsAndToolsArr.map(obj => { return <Creator object={obj} type='programming-languages' /> })}
                </div>
              </div>
              <div id='libraries-and-frameworks' className='d-flex flex-column justify-content-center libraries-and-frameworks'>
                <span className='SnT-title'>Libraries and frameworks</span>
                <div className='d-flex flex-row SnT-items '>
                  {SkillsAndToolsArr.map(obj => { return <Creator object={obj} type='libraries-and-frameworks' /> })}
                </div>
              </div>
              <div id='software-and-tools' className='d-flex flex-column justify-content-center software-and-tools'>
                <span className='SnT-title'>Software and tools</span>
                <div className='d-flex flex-row SnT-items '>
                  {SkillsAndToolsArr.map(obj => { return <Creator object={obj} type='software-and-tools' /> })}
                </div>
              </div>
            </div>
          </div>
          <div id='education' className='d-flex flex-column  align-items-start section-5'>
            <div className='d-flex flex-column align-items-start education'>
              {CertificationsArr.map(obj => { return <Certification certification={obj} /> })}
            </div>
          </div>
          <div id='contact-me' className='d-flex flex-column section-6'>
            <div className='d-flex flex-column contact-me'>
              <div className='d-flex flex-column justify-content-center align-self-start Email'>
                <span className='section-6-label'>const Contact = {details.openKey}</span>
                <span className='section-6-label email-label'>E-mail:</span>
                <div className='d-flex flex-row justify-content-center'>
                  <img className='email-img' src=''></img>
                  <a href=''>ramicurros@gmail.com,</a>
                </div>
              </div>
              <div className='d-flex flex-column justify-content-center align-self-start phone'>
                <span className='section-6-label phone-label'>Phone:</span>
                <div className='d-flex flex-row justify-content-center'>
                  <img className='phone-img' src=''></img>
                  <a href=''>+54 11 2627-7005,</a>
                </div>
              </div>
              <span className='section-6-label closeKey'>{details.closeKey}</span>
              <div className='d-flex flex-row justify-content-center align-self-center align-items-center '>
                {ContactArr.map(obj => { return <Contact contactObj={obj} /> })}
              </div>
              <div className='d-flex flex-column justify-content-center align-self-start page-creation'>
                <span id='page-creation-label' className='page-creation-label'>/* This page was created with: */</span>
                <div className='d-flex flex-row justify-content-center align-items-center used-for-this-page'>
                  {ThisPage.map(obj => { return <Creator object={obj} type='used-for-this-page' /> })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
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
