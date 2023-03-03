function LibrariesNFrameworks({ object }) {
    if (object.type === 'libraries-and-frameworks') {
        return (
            <>
                <img className={object.imgClass} src={object.src} />
                {object.name}
            </>
        );
    }
}

export default LibrariesNFrameworks;