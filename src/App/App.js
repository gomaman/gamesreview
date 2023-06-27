import { Route, Routes } from "react-router-dom";
import NavigationGenerator from "../Components/Navigation/Navigation";
import HomePage from "../Pages/Home/HomePage";
import GamesPage from "../Pages/Games/GamesPage";
import NewsPage from "../Pages/News/NewsPage";
import ReviewsPage from "../Pages/Reviews/ReviewsPage";
import SearchPage from "../Pages/Search/SearchPage";
import SingleNewsPage from "../Pages/News/SingleNewsPage";
import GamePage from "../Pages/Games/GamePage";
import ReviewItem from "../Components/Containers/Reviews/ReviewItem";

function App() {




  return (
    <div className="App">

      <NavigationGenerator></NavigationGenerator>
      <Routes>
        <Route path='/' element={<HomePage />} ></Route>
        
        <Route path='/games' element={<GamesPage />} ></Route>
        <Route path='/games/game/:id' element={<GamePage />} ></Route>

        <Route path='/news' element={<NewsPage />} ></Route>
        <Route path='/news/:id' element={<SingleNewsPage />} ></Route>

        <Route path='/reviews' element={<ReviewsPage />} ></Route>
        <Route path='/reviews/:id' element={<ReviewItem />} ></Route>

        {/* <Route path='/search' element={<SearchPage />} ></Route> */}
      </Routes>
    </div>
  );
}

export default App;
