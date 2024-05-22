import React, { useState } from 'react';
import './ContactCSS.css';
import contactImg from './contactUs.jpeg'

function Contact() {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    alert("Form submitted!");
  };

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    // Handle feedback form submission logic
    alert("Feedback submitted!");
    setPopupVisible(false);
  };

  const openForm = () => {
    setPopupVisible(true);
  };

  const closeForm = () => {
    setPopupVisible(false);
  };

  return (
    <div>
      <div className="container3">
        <div style={{ textAlign: 'center' }}>
          <h3><b>Feedback</b></h3>
        </div>

        <div className="row">
          <div className="column1" style={{ width: '50%' }}>
            <img src={contactImg} style={{ width: '100%' }} alt="Contact Us" />
          </div>

          <div className="column1" style={{ width: '50%' }}>
            <form onSubmit={handleSubmit}>
              <label>First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Enter Your First Name" required />
              
              <label>Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Enter Your Last Name" required />
              
              <label>Topic</label>
              <input type="text" id="topic" name="topic" placeholder="Please enter the topic for which you wish to contact us." required />
              
              <label>Description</label>
              <textarea id="subject" name="subject" placeholder="Please provide a detailed description of the reason for your contact." style={{ height: '170px' }} required></textarea>
          
              <input type="submit" value="Submit" />
             
            </form>
          </div>
        </div>
      </div>

      {/* <button className="open-button" onClick={openForm}>Quick Feedback</button>

      {popupVisible && (
        <div className="form-popup">
          <form className="form-container" onSubmit={handleFeedbackSubmit}>
            <h1>Feedback</h1>

            <label htmlFor="design">1. How would you rate the overall design of the website?</label><br />
            <input type="radio" id="excellent" name="design" value="Excellent" required />
            <label htmlFor="excellent">Excellent</label><br />
            <input type="radio" id="good" name="design" value="Good" required />
            <label htmlFor="good">Good</label><br />
            <input type="radio" id="average" name="design" value="Average" required />
            <label htmlFor="average">Average</label><br />
            <input type="radio" id="below_average" name="design" value="Below Average" required />
            <label htmlFor="below_average">Below Average</label><br />
            <input type="radio" id="poor" name="design" value="Poor" required />
            <label htmlFor="poor">Poor</label><br /><br />
            
            <label htmlFor="navigation">2. How easy was it to navigate through the website?</label><br />
            <input type="radio" id="very_easy" name="navigation" value="Very Easy" required />
            <label htmlFor="very_easy">Very Easy</label><br />
            <input type="radio" id="easy" name="navigation" value="Easy" required />
            <label htmlFor="easy">Easy</label><br />
            <input type="radio" id="neutral" name="navigation" value="Neutral" required />
            <label htmlFor="neutral">Neutral</label><br />
            <input type="radio" id="difficult" name="navigation" value="Difficult" required />
            <label htmlFor="difficult">Difficult</label><br />
            <input type="radio" id="very_difficult" name="navigation" value="Very Difficult" required />
            <label htmlFor="very_difficult">Very Difficult</label><br /><br />
            
            <label htmlFor="loading_speed">3. How satisfied are you with the website's loading speed?</label><br />
            <input type="radio" id="very_satisfied" name="loading_speed" value="Very Satisfied" required />
            <label htmlFor="very_satisfied">Very Satisfied</label><br />
            <input type="radio" id="satisfied" name="loading_speed" value="Satisfied" required />
            <label htmlFor="satisfied">Satisfied</label><br />
            <input type="radio" id="neutral_speed" name="loading_speed" value="Neutral" required />
            <label htmlFor="neutral_speed">Neutral</label><br />
            <input type="radio" id="dissatisfied" name="loading_speed" value="Dissatisfied" required />
            <label htmlFor="dissatisfied">Dissatisfied</label><br />
            <input type="radio" id="very_dissatisfied" name="loading_speed" value="Very Dissatisfied" required />
            <label htmlFor="very_dissatisfied">Very Dissatisfied</label><br /><br />

            <button type="submit" className="btn">Submit</button>
            <button type="button" className="btn cancel" onClick={closeForm}>Close</button>
          </form>
        </div>
      )} */}
    </div>
  );
}

export default Contact;
