import ToolBox from "./toolBox";

function SkillsAndCertifications() {
    return (
        <div className='d-flex flex-column container-fluid h-100 skillsAndEducation p-3 p-md-4 p-lg-5'>
            <div class='row row-cols-1 row-cols-xl-2 mb-auto'>
                <div class='col  align-items-start justify-content-center'>
                    <div class='skills'>
                        <div class='ProgrammingLanguages'>
                            <span className='mt-3 mb-3'>Programming Languages</span>
                            <div class='d-flex flex-row align-items-center toolBoxes mt-3 mb-3'>
                                <ToolBox iconClass='fab fa-css3-alt fa-fw cssIcon' name='Css' customClass='css-box' />
                                <ToolBox iconClass='fab fa-html5 fa-fw htmlIcon' name='Html' customClass='html-box' />
                                <ToolBox iconClass='fab fa-js-square fa-fw javascriptIcon' name='Javascript' customClass='javascript-box' />
                            </div>
                        </div>
                        <div class='LibrariesNFrameworks'>
                            <span className='mt-3 mb-3'>Libraries and Frameworks</span>
                            <div class='d-flex flex-row align-items-center toolBoxes mt-3 mb-3'>
                                <ToolBox iconClass='fab fa-react fa-fw reactIcon' name='React' customClass='react-box' />
                                <ToolBox iconClass='fab fa-bootstrap fa-fw bootstrapIcon' name='Bootstrap' customClass='bootstrap-box' />
                            </div>
                        </div>
                        <div class='SoftwareNTools'>
                            <span className='mt-3 mb-3'>Software and Tools</span>
                            <div class='d-flex flex-row align-items-center toolBoxes mt-3 mb-3'>
                                <ToolBox iconClass='fab fa-github githubIcon' name='Github' customClass='github-box' />
                                <div className='d-flex flex-row justify-content-start align-items-center me-3 p-2 toolBox vsc-box'>
                                    <img className='vsc-icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png' style={{height: '28px', width: '30px'}}/>
                                    <div className='d-none d-md-inline-flex ms-2 toolBox-txt'>
                                        <span>Visual Studio Code</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='col'>
                    <div class='d-flex flex-column align-items-start justify-content-center education mt-2 mb-2 mt-md-0 mb-md-0'>
                        <span className='educationTitle'>Education</span>
                        <div className='d-flex flex-column certifications ms-2'>
                            <span className='certification mt-1 mb-1'>Responsive Web Design<a href='' className='ms-1 linkIcon fas fa-up-right-from-square'></a></span>
                            <span className='certification mt-1 mb-1'>Front End Development Libraries<a href='' className='ms-1 linkIcon fas fa-up-right-from-square'></a></span>
                            <span className='certification mt-1 mb-1'>JavaScript Algorithms and Data Structures<a href='' className='ms-1 linkIcon fas fa-up-right-from-square'></a></span>
                            <span className='certification mt-1 mb-1'>EF SET English Certificate 73/100 (C2 Proficient)<a href='' className='ms-1 linkIcon fas fa-up-right-from-square'></a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class='row'>
                <div class='col-12 col-md-4 align-items-start justify-content-center'>
                    <div class='d-flex flex-column forWebsite'>
                        <span>/* Used for this website **/</span>
                        <div class='row row-cols-2 row-cols-md-1 d-flex w-100 toolBoxes ms-1 mt-2'>
                            <div className='col d-flex align-items-center' style={{ padding: '0', width: 'auto' }}>
                                <ToolBox iconClass='fab fa-css3-alt fa-fw cssIcon' name='Css' customClass='css-box' />
                                <ToolBox iconClass='fab fa-html5 fa-fw htmlIcon' name='Html' customClass='html-box' />
                                <ToolBox iconClass='fab fa-react fa-fw reactIcon' name='React' customClass='react-box' />
                            </div>
                            <div className='col d-flex align-items-center mt-md-2' style={{ padding: '0', width: 'auto' }}>
                                <ToolBox iconClass='fab fa-bootstrap fa-fw bootstrapIcon' name='Bootstrap' customClass='bootstrap-box' />
                                <ToolBox iconClass='fab fa-js-square fa-fw javascriptIcon' name='Javascript' customClass='javascript-box' />
                            </div>
                        </div>
                    </div>
                </div>
                <div class='col d-none d-lg-flex flex-column align-items-end justify-content-center ms-auto p-0 p-md-2 p-lg-4'>
                    <div class='contactMe'>
                        <span>Contact Me</span>
                        <div className='ms-1 contacts'>
                            <span className='fas fa-envelope contactIcon me-1'></span><span>Phone: +54 11 2627-7005</span>
                            <br></br>
                            <span className='fas fa-phone contactIcon me-1'></span><span>Gmail: ramicurros@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsAndCertifications;