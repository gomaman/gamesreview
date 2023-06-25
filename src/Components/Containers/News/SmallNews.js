import SmallNewsContainer from "./StyledSmallNews";

const SmallNews = ({ afterFirstNews }) => {
  return (
    <SmallNewsContainer>
      {afterFirstNews.map((item) => {
        const { title, body, author, date, thumbnail } = item;
        return (
          <div className="blog-container small" key={item.id}>
            <div className="blog-img-container">
              <img src={thumbnail} alt="Blog Image" />
            </div>
            <div className="sideBlog-content-container">
              <h2>{title}</h2>
              <div className="sideBlog-content">
                <p>{author}</p>
                <p>{date}</p>
              </div>
            </div>
          </div>
        );
      })}
    </SmallNewsContainer>
  );
};

export default SmallNews;