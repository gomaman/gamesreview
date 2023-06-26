import React from 'react'
import StyledForm from '../SingleNews/StyledForm'
import { Button2 } from '../Button/Buttons'
import CurrentDateTime from '../../Date/Date'

const AddNewsComment = () => {


  const submitComment = (e) => {
    e.preventDefault()
    console.log('success')
    console.log(e.target.body.value)
    console.log(CurrentDateTime())
  }


  return (
    <StyledForm onSubmit={submitComment}>
      <div>
        <label htmlFor="select">User:</label>
        <select id="select" name="select">
          <option value="option1">Option </option>
        </select>
      </div>
      <div>
        <label htmlFor="body">Comment:</label>
        <textarea id="body" name="body"></textarea>
      </div>
      <Button2 type="submit">Submit</Button2>
    </StyledForm>
  )
}

export default AddNewsComment