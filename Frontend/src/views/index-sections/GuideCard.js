import React, { useState } from 'react';
import './GuideCard.css';

const GuideCard = ({ photo, name, mobileNo, specialization, languages, city }) => {
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleBookAppointment = () => {
    // handle book appointment logic
  };

  const handleShowReviewPopup = () => {
    setShowReviewPopup(true);
  };

  const handleCloseReviewPopup = () => {
    setShowReviewPopup(false);
    setRating(0);
    setReviewText('');
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmitReview = () => {
    // handle submit review logic
    handleCloseReviewPopup();
  };

  return (
    <div className="guide-card">
      <div className="guide-card__image">
        <img src={photo} alt={`${name} Profile`} />
      </div>
      <div className="guide-card__info">
        <h2>{name}</h2>
        <p>{mobileNo}</p>
        <p>{specialization}</p>
        <p>{`Languages: ${languages}`}</p>
        <p>{`City: ${city}`}</p>
      </div>
      <div className="guide-card__actions">
        <button onClick={handleBookAppointment}>Book Appointment</button>
        <button onClick={handleShowReviewPopup}>Leave a Review</button>
      </div>
      {showReviewPopup && (
        <div className="review-popup">
          <div className="review-popup__overlay" onClick={handleCloseReviewPopup}></div>
          <div className="review-popup__content">
            <h2>Leave a Review</h2>
            <div className="review-popup__rating">
              <label>
                <input type="radio" name="rating" value="1" checked={rating === 1} onChange={handleRatingChange} />
                1 star
              </label>
              <label>
                <input type="radio" name="rating" value="2" checked={rating === 2} onChange={handleRatingChange} />
                2 stars
              </label>
              <label>
                <input type="radio" name="rating" value="3" checked={rating === 3} onChange={handleRatingChange} />
                3 stars
              </label>
              <label>
                <input type="radio" name="rating" value="4" checked={rating === 4} onChange={handleRatingChange} />
                4 stars
              </label>
              <label>
                <input type="radio" name="rating" value="5" checked={rating === 5} onChange={handleRatingChange} />
                5 stars
              </label>
            </div>
            <textarea value={reviewText} onChange={handleReviewTextChange} placeholder="Write a review"></textarea>
            <button onClick={handleSubmitReview}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuideCard;
