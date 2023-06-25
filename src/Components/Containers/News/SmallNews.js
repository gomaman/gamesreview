import SmallNewsContainer from "./StyledSmallNews";
import { Link } from "react-router-dom";

const SmallNews = ({ afterFirstNews }) => {
  return (
    <SmallNewsContainer>
      {afterFirstNews.map((item) => {
        const { title, body, author, date, thumbnail } = item;
        return (
          <Link to={`/news/${item.id}`} key={item.id} className="news-link">
            <div className="blog-container small">
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
          </Link>
        );
      })}
    </SmallNewsContainer>
  );
};

export default SmallNews;