import React, { useState } from 'react';
import './star.css'; // Import CSS for styling
import { FaSmile } from "react-icons/fa";

function Star({ onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false); // State for Thank You message visibility

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = () => {
    if (onRatingSubmit) {
      onRatingSubmit(rating);
    }
    if (rating > 0) {
      setShowThankYou(true); // Display Thank You message if a star is selected
    }
  };

  return (
    <div className="star-rating">
      <h3 className='rating'>Select Rating :</h3><br/>
      {[...Array(5)].map((_, index) => (
        <span
          key={index} id= 'fivestar'
          className={index < rating ? 'star-filled' : 'star-empty'}
          onClick={() => handleStarClick(index + 1)}
        >
          ★
        </span>
      ))}
      <button onClick={handleSubmit} id='rating-btn' className="btn flex" type="submit">
        SUBMIT RATING
      </button>
      {showThankYou && ( // Conditionally render Thank You message
        <div id="thankYouMessage">
          Thank you for submitting the rating! <FaSmile className='smile' />
        </div>
      )}
    </div>
  );
}

export default Star;
