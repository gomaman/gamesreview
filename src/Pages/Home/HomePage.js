import { Container } from "@mui/material"
import HomeNewsContainer from "./HomeNews"
import HomeGamesContainer from "./HomeGames"
import HomeReviewsContainer from "./HomeReviews"

const HomePage = () => {
    return (
        <Container>
            <HomeNewsContainer></HomeNewsContainer>
            <HomeGamesContainer></HomeGamesContainer>
            <HomeReviewsContainer></HomeReviewsContainer>
        </Container>
    )
}



export default HomePage