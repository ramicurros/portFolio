function SoftwareNTools({ object }) {
    if (object.type === 'software-and-tools') {
        return (
            <>
                <img className={object.imgClass} src={object.src} />
                {object.name}

            </>
        );
    }
}

export default SoftwareNTools;