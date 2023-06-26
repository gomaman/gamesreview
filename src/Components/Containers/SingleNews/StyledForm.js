import styled from "styled-components";

const StyledForm = styled.form`
  background-color: rgb(40, 48, 68);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  transition: box-shadow 0.2s ease-in-out;
  height: 100%;
    

  & div {
    margin-bottom: 20px;
  }

  & label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  & select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  & textarea {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }

  & styled.input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  & styled.button {
    padding: 10px 15px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;


export default StyledForm