
import styled from "styled-components";
const GameReview = ({review}) => {

    const ReviewWrapper = styled.div`
  background-color: rgb(41, 37, 37);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 10);
  margin: 15px 0px;

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  li {
    margin-bottom: 10px;
  }
`;


    return (
        <ReviewWrapper>
            <ul>
                <li>{review.title}</li>
                <li>{review.body}</li>
                <li>{review.ageRating}</li>
                <li>{review.author}</li>
                <li>Score:{review.score}</li>
                <li>Revieweviewed :{review.date}</li>
            </ul>
        </ReviewWrapper>
    )
}


export default GameReview