import styled from 'styled-components';

const NewsContainer = styled.div`
  gap: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

export default NewsContainer;