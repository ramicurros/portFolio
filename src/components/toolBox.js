function ToolBox({name, iconClass, customClass}) {

    let boxClass = `d-flex flex-row justify-content-start align-items-center me-3 p-2 toolBox ${customClass}`
    return (
        <div className={boxClass}>
            <span className={iconClass}></span>
            <div className='d-none d-md-inline-flex ms-2 toolBox-txt'>
                <span>{name}</span>
            </div>
        </div>
    );
}

export default ToolBox;