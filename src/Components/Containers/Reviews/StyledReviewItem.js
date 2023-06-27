import styled from 'styled-components';

const StyledReviewItem = styled.div`
  background-color: rgb(40, 48, 68);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  transition: box-shadow 0.2s ease-in-out;
  height: 100%;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.671) 0px 3px 8px;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  .review-content {
    margin-top: 15px;
    margin-bottom: 15px;
    font-weight: bold;
  }

  .review-right-content {
        margin-top: 15px;
    margin-bottom: 15px;
    font-weight: bold;
    display: grid;
  }

  .review-title {
    color: white;
    font-size: 24px;
    margin-bottom: 10px;
    grid-column: 1 / 3;
  }

  .review-body {
    color: white;
  }

  .review-author {
    margin: 20px 0px;
    font-weight: 500;
    color: white;
  }

  .review-date {
    margin: 20px 0px;
    font-weight: 500;
    color: white;
  }

  .review-game-title {
    margin: 20px 0px;
    font-weight: 500;
    color: white;
  }

  .review-game-release-date {
    margin: 20px 0px;
    font-weight: 500;
    color: white;
  }

  .review-score {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
  padding: 10px;
  font-weight: 500;
  font-size: 50px;
  color: white;
  border-radius: 4px;
  text-align: center;
}

.review-score span {
  font-size: 24px;
  text-transform: uppercase;
  margin-top: 4px;
}
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 16px;

    .review-title {
      font-size: 20px;
    }

    .review-score {
      font-size: 36px;
    }
  }

  @media (max-width: 480px) {
    padding: 8px;

    .review-title {
      font-size: 18px;
    }

    .review-score {
      font-size: 24px;
    }
  }
`;

export default StyledReviewItem;