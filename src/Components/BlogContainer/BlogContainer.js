import React from 'react';

const BlogContainer = ({ classes, children }) => {
  const addedClasses = classes ? classes.split(' ').join(' ') : '';
  return (
    <div className={`blog-container ${addedClasses}`}>
      {children}
    </div>
  );
}

export default BlogContainer;