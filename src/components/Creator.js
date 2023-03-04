function Creator({ object, type }) {

  let wrapperClass = `d-flex flex-row skills-and-tools ${object.class}`;

    if (object.type === type) {
        return (
              <div className={wrapperClass}>          
                <img className={object.imgClass} src={object.img} />
                {object.name}
              </div>      
        );
    }
}

export default Creator;