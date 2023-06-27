import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { API_URL } from '../../Config/LinksConfig';
import StyledNewsItem from '../../Components/Containers/News/StyledNewsItem';
import { Link } from 'react-router-dom';

const HomeNewsContainer = () => {
    const [gamesData, setGamesData] = useState();

    useEffect(() => {
        axios
            .get(API_URL + `/games?_limit=5`)
            .then(res => {
                const gamesData = res.data;
                console.log(gamesData);
                setGamesData(gamesData);
            })
            .catch(err => toast.error(err.message));
    }, []);

    if (!gamesData) {
        return <h1>Loading...</h1>;
    }

    return (
        <StyledNewsItem>
            {gamesData.map(data => {
                return (
                    <div key={data.id} className="single-news-container">

                        <div className="single-news-content">
                            <Link to={`/games/game/${data.id}`} key={data.id}>
                                <h2 className="news-title">{data.title}</h2>
                            </Link>
                            <p className="news-body">{data.body}</p>
                            <ul>
                                {data.platform.map(platform => (
                                    <li key={platform}>{platform}</li>
                                ))}
                            </ul>
                            <p className="news-date">Release Date: {data.releaseDate}</p>
                        </div>

                    </div>
                );
            })}
        </StyledNewsItem>
    );
};

export default HomeNewsContainer;