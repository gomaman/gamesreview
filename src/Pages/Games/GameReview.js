
const GameReview = ({review}) => {
// console.log(review)
    return (
        <div>
            <ul>
                <li>{review.title}</li>
                <li>{review.body}</li>
                <li>{review.ageRating}</li>
                <li>{review.author}</li>
                <li>Score:{review.score}</li>
                <li>reviewed:{review.date}</li>
            </ul>
        </div>
    )
}


export default GameReview