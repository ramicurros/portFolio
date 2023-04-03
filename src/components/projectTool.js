function ProjectTool({tool}) {

    let iconClass;

    switch (tool) {
        case 'javascript': iconClass = 'fab fa-js-square fa-fw';
        break;
        case 'react': iconClass = 'fab fa-react fa-fw';
        break;
        case 'bootstrap': iconClass = 'fab fa-bootstrap fa-fw';
        break;
        case 'html': iconClass = 'fab fa-html5 fa-fw';
        break;
        case 'css': iconClass = 'fab fa-css3-alt fa-fw';
        break;
    }

    return (
        <span className={iconClass}></span>
    );
}

export default ProjectTool;