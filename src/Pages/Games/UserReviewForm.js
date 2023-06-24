import React from "react";
import './GameReviewForm.css'

const UserReviewForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const body = e.target.body.value;
    const author = e.target.author.value;
    const score = e.target.score.value;
    const date = e.target.date.value;

    console.log("Title:", title);
    console.log("Body:", body);
    console.log("Author:", author);
    console.log("Score:", score);
    console.log("Date:", date);

    e.target.reset();
  };

  return (
    <div className="form-container">
      <h2>User Review Form</h2>
      <form className="review-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="title">
            Title:
          </label>
          <input
            className="input-text"
            type="text"
            id="title"
            name="title"
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="body">
            Body:
          </label>
          <textarea className="textarea" id="body" name="body"></textarea>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="author">
            Author:
          </label>
          <input
            className="input-text"
            type="text"
            id="author"
            name="author"
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="score">
            Score:
          </label>
          <input
            className="input-number"
            type="number"
            id="score"
            name="score"
            min="1"
            max="10"
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="date">
            Date:
          </label>
          <input className="input-date" type="date" id="date" name="date" />
        </div>
        <button className="submit-button" type="submit">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default UserReviewForm;