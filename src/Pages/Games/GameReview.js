import ReviewWrapper from "../../Components/Containers/Reviews/StyledReviewWrapper";

const GameReview = ({ review }) => {
  return (
    <ReviewWrapper>
      <ul>
        <li>{review.title}</li>
        <li>{review.body}</li>
        <li>{review.ageRating}</li>
        <li>{review.author}</li>
        <li>Score: {review.score}</li>
        <li>Reviewed: {review.date}</li>
      </ul>
    </ReviewWrapper>
  );
};

export default GameReview;