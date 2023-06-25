import SmallNewsContainer from "./StyledSmallNews";


const SmallNews = () => {
  return (
    <SmallNewsContainer>
      <div className="blog-container small">
        <div className="blog-img-container">
          <img src="https://assets2.ignimgs.com/2014/06/09/e3-press-kit-10-wm-forza-horizon2jpg-e0e9d3.jpg?crop=16%3A9&width=282" alt="Blog Image" />
        </div>
        <div className="sideBlog-content-container">
          <h2>Another Blog Title TEST</h2>
          <div className="sideBlog-content">
            <p>Author</p>
            <p>Release Date: June 1, 2023</p>
          </div>
        </div>
      </div>
    </SmallNewsContainer>

  );
};

export default SmallNews;