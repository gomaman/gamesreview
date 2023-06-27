import styled from 'styled-components';

export const CommentCard = styled.div`
  background-color: rgb(40,48,68);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  position: relative;

  &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }


   .delete-button {
    background-color: rgb(245, 218, 218);
    color: #000;
    border: none;
    padding: 7px 10px;
    border-radius: 50px;
    font-size: 16px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .edit-button {
    background-color: rgb(180, 237, 216);
    color: #000;
    border: none;
    padding: 7px 10px;
    border-radius: 50px;
    font-size: 16px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 100px;
  }
`;

export default CommentCard;