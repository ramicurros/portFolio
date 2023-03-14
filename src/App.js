
import './App.css';

function App() {
  return (
    <div className="d-flex container-fluid flex-column App">
      <div className='d-flex align-items-center navbarWrapper'>navbar</div>
      <div className='d-flex portfolioWrapper'>
        <div className='d-flex flex-column sideColumn'>sideColumn</div>
        <div className='d-flex flex-column page'>
          <div className='d-flex flex-column page-container aboutMeWrapper'>
            <span className='myName'>Ramiro Curros Bastit</span>
            <div className='aboutMeContainer'>
              <span className='webDeveloper'>[I'm a web developer]</span>
              <div className='d-flex flex-column aboutMe'>
                <span className='aboutMeTag'>AboutMe</span>
                <span className='aboutMeText'>lorem</span>
                <span className='aboutMeTag'>AboutMe</span>
              </div>
            </div>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center flex-lg-row page-container projectPage'>

          </div>
          <div className='d-flex flex-column justify-content-center align-items-center flex-lg-row page-container projectPage'>

          </div>
          <div className='d-flex flex-column justify-content-center align-items-center flex-lg-row page-container projectPage'>

          </div>
          <div className='d-flex flex-column justify-content-center align-items-center flex-lg-row page-container projectPage'>

          </div>
          <div className='d-flex flex-column justify-content-center align-items-center flex-lg-row page-container projectPage'>

          </div>
          <div className='d-flex flex-column justify-content-center align-items-center flex-lg-row page-container projectPage'>

          </div>
          <div className='d-flex flex-column flex-lg-row page-container skillsAndTools'>
              <div className='skillsAndTools1'>
                <div className='skills'>

                </div>
                <div className='d-flex flex-column thisWebsite'>
                  <div className='thisWebsite1'>

                  </div>
                  <div className='thisWebsite2'>

                  </div>
                </div>
              </div>
              <div className='skillsAndTools2'>
                <div className='tools'>

                </div>
                <div className='contactMe'>

                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
