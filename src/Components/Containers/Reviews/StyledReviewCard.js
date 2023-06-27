import styled from 'styled-components';

const ReviewCard = styled.div`
    background-color: rgb(41, 37, 37);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 10);
    position: relative;

    &:hover {
        background-color: rgb(40, 48, 68);
    }

    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }

    li {
        margin-bottom: 10px;
    }

    h1 {
        font-size: 24px;
        margin-bottom: 10px;
    }

    p {
        margin-top: 10px;
    }

    img {
        width: 100%;
        max-width: 100%;
        height: auto;
        display: block;
        border-radius: 8px;
        margin-bottom: 10px;
    }
    a.news-item-link {
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
  }

  

  .delete-button {
    background-color: rgb(255,255,255);
    color: #000;
    border: none;
    padding: 5px 10px;
    border-radius: 50px;
    font-size: 16px;
    cursor: pointer;
    position: absolute;
    bottom: 30px;
    right: 10px;
  }
  

`;


export default ReviewCard;