import React from 'react'
import StyledNewsItem from '../News/StyledNewsItem';
import { useParams } from 'react-router-dom';

const SingleNewsItem = () => {

    const { id } = useParams();

    console.log(id)


    return (
        <StyledNewsItem>
            <div className="single-news-img-container">
                <img src="news-image.jpg" alt="News Image" />
            </div>
            <div className="single-news-content">
                <h2 className="news-title">News Title</h2>
                <p className="news-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac lacus nec nunc vestibulum sagittis. Morbi tristique fermentum ipsum, et accumsan velit sollicitudin non. Suspendisse cursus nisi vitae erat aliquet, non tristique felis dignissim. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam et lectus eros. Suspendisse euismod, arcu sed vulputate feugiat, dolor lectus interdum purus, et ullamcorper tellus est in mauris. Vestibulum convallis nulla sit amet sapien interdum feugiat. Aliquam pretium, nisi ac finibus tristique, mauris arcu auctor turpis, ac efficitur eros sem id lectus.
                </p>
                <p className="news-author">Author: John Doe</p>
                <p className="news-date">Release Date: June 1, 2023</p>
            </div>
        </StyledNewsItem>
    );
};

export default SingleNewsItem