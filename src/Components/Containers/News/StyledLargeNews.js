import styled from 'styled-components';

const StyledLargeNews = styled.div`
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
`;

export default StyledLargeNews;