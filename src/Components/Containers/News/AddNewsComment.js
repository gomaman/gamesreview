import React from 'react'
import StyledForm from '../SingleNews/StyledForm'

const AddNewsComment = () => {
  return (
    <StyledForm>
      <div>
        <label htmlFor="select">Select:</label>
        <select id="select" name="select">
          <option value="option1">Option </option>
        </select>
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea id="body" name="body"></textarea>
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" />
      </div>
      <button type="submit">Submit</button>
    </StyledForm>
  )
}

export default AddNewsComment