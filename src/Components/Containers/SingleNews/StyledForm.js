import styled from "styled-components";

const StyledForm = styled.form`
  background-color: rgb(40,48,68);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  transition: box-shadow 0.2s ease-in-out;
  height: 100%;

  & > div {
    margin-bottom: 20px;
  }

  & label {
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
  }

  & select,
  & textarea,
  & input[type='text'] {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s ease-in-out;
    resize: vertical;
    background-color: rgb(61,68,86);
  }

  & textarea {
    min-height: 100px;
  }

  & select {
    appearance: none;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 14px 14px;
    padding-right: 30px;
    background-color: rgb(61,68,86);
  }

  & select:focus,
  & textarea:focus,
  & input[type='text']:focus {
    outline: none;
    border-color: #007bff;
    color:rgb(254,255,254);
  }

`;


export default StyledForm