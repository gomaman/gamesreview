import styled from 'styled-components';

export const CommentCard = styled.div`
  background-color: rgb(40,48,68);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;

  &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
`;

export default CommentCard;