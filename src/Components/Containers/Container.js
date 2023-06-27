import './Container.css'

function Container({ classes, children }) {
    const addedClasses = classes ? classes.split(' ').join(' ') : '';
    return (
      <div className={`container ${addedClasses}`}>
        {children}
      </div>
    );
  }
  
  export default Container;