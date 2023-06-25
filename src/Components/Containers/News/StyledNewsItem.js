import styled from "styled-components";


const StyledNewsItem = styled.div`
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

  &.big {
    display: grid;
    grid-template-rows: 2fr 1fr;
  }

  &.small {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .blog-img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }
  }

  .main-blog-content-container {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h2 {
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      margin: 0;
    }

    h3 {
      font-size: 16px;
      color: #fff;
      margin: 0;
    }

    .sideBlog-content {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      color: #ccc;

      p {
        margin: 0;
        font-size: 14px;
      }
    }
  }
`;

export default StyledNewsItem;