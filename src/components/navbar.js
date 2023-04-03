
function Menu() {
    return (
        <nav className="navbar  fixed-top navbar-expand-lg navbarWrapper">
            <div className="container-fluid ">
                <a className="navbar-brand r-logo" href="">
                    <div className="d-flex align-items-center justify-content-center r-logoWrapper">
                        <span>R</span>
                    </div>
                </a>
                <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#collapsedMenu" aria-controls="collapsedMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon top-bar"></span>
                    <span className="toggler-icon middle-bar"></span>
                    <span className="toggler-icon bottom-bar"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsedMenu" >
                    <ul class="navbar-nav me-auto me-lg-4 ms-lg-auto mb-2 mb-lg-0">
                        <li className="nav-item pe-lg-3 ps-lg-3">
                            <a className="nav-link navItemColor" href="#aboutMe">About Me</a>
                        </li>
                        <li className="nav-item pe-lg-3 ps-lg-3">
                            <a className="nav-link navItemColor" href="#projects">Projects</a>
                        </li>
                        <li class="nav-item pe-lg-3 ps-lg-3">
                            <a className="nav-link navItemColor" href="#skillsAndCertifications">Skills and certifications</a>
                        </li>
                        <li>
                            <div class='d-flex d-lg-none flex-column align-items-start justify-content-center dropdown contactMenu'>
                                <a className='nav-link dropdown-toggle navItemColor pb-2 w-100' role="button" data-bs-toggle="dropdown" aria-expanded="false">Contact Me</a>
                                <ul class="dropdown-menu nav-dropwdown">
                                    <li><a href="tel:+54 11 2627-7005" className='pb-1 mb-2 dropdownContact'>Phone: +54 11 2627-7005</a></li>
                                    <li><a href="mailto: ramicurros@gmail.com" className='pb-1 mb-2 dropdownContact'>Gmail: ramicurros@gmail.com</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <a href='Cv Ramiro Ingles.pdf' download className="ms-auto ms-lg-0 mt-2 mt-lg-0 btn-sm btn downloadCV">Download Resume</a>
                    <div className='d-flex d-lg-none flex-row justify-content-center mt-4 mb-2 dropdownIconBar'>
                        <a href='https://github.com/ramicurros' target="_blank" className='fab fa-github-square ms-4 me-4 dropMenu-icon'></a>
                        <a href='https://www.linkedin.com/in/ramiro-curros-bastit/' target="_blank" className='fab fa-linkedin ms-4 me-4 dropMenu-icon'></a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Menu;