
function ProgrammingLanguages({ object }) {
    if (object.type === 'programming-languages') {
        return (
            <>
                <img className={object.imgClass} src={object.src} />
                {object.name}
            </>
        );
    }
}

export default ProgrammingLanguages;