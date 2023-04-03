function SideBar() {
    return (
        <>
            <div className="sideBar-group-1 mb-auto">
                <a href='https://github.com/ramicurros'  target="_blank" className="fab fa-github-square sideBar-icon"></a>
            </div>
            <div className="d-flex flex-column sideBar-group-2">
                <a href='https://www.linkedin.com/in/ramiro-curros-bastit/'  target="_blank" className="fab fa-linkedin sideBar-icon"></a>
                <a href='tel:+54 11 2627-7005' className="fas fa-square-phone sideBar-icon"></a>
                <a href='mailto: ramicurros@gmail.com' className="fas fa-square-envelope sideBar-icon"></a>
            </div>
        </>
    );
}

export default SideBar;