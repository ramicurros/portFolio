import Logos from '../images/images';

function Constructor({ object, type }) {

    let wrapperClass = `d-flex justify-content-center align-items-center ${object.wrapperClassName}`;
    let imgClass = `img-fluid ${object.imgClass}`

      if (object.type === type) {
          return (
                <div className={wrapperClass}>          
                  <img className={imgClass} src={object.img} />
                  {object.name}
                </div>      
          );
      }
  }
  
  export default Constructor;