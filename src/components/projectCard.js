import ProjectTool from "./projectTool";

function ProjectCard({ name, description, img, tools, code, live }) {
    return (
        <div class='col d-flex justify-content-center projectCardWrapper'>
            <div class="card projectCard">
                <div className="card-img-top w-100 p-1">
                    <img src={img} class="img-fluid cardImg" alt="..." />
                </div>
                <div className="p-1">
                    <div class="card-body cardBody">
                        <h5 class="card-title" style={{ color: "rgb(150 251 232)" }}>{name}</h5>
                        <div className="ms-1 me-1">
                            <span class="card-text">{description}</span>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-evenly pt-3 pb-3 projectLanguages">
                        {tools.map((x) => {
                            return <ProjectTool tool={x} />
                        })}
                    </div>
                    <div className="d-flex d-lg-none flex-row p-2 justify-content-evenly">
                        <a href={live} target='_blank' className="btn-sm btn cardButton"><span className="fas fa-desktop fa-fw"></span></a>
                        <a href={code} target='_blank' className="btn-sm btn cardButton"><span className="fas fa-code fa-fw"></span></a>
                    </div>
                </div>
                <div className="d-none d-lg-flex flex-column justify-content-center align-items-center hoverButtons">
                    <div className="d-flex justify-content-evenly w-100">
                        <a href={live} target='_blank' className="btn-sm btn hoverCardButton"><span className="fas fa-desktop fa-fw"></span></a>
                        <a href={code} target='_blank' className="btn-sm btn hoverCardButton"><span className="fas fa-code fa-fw"></span></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;