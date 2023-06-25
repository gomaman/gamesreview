import styled from 'styled-components';

const AllNewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(1fr, 2fr));
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  > :last-child {
    grid-column: span 2;
  }
`;

export default AllNewsContainer;