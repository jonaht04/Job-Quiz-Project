import React from 'react';
import "./Basic_Question.css";

interface Props {
    goToHomePage: () => void;
  }
  
  const DetailedQuestion: React.FC<Props> = ({ goToHomePage }) => {
    return (
      <div>
        <header className="header">
          <p className="questionCounter">Question 1/7  </p>
          <div className="buttonContainer">
            <button className="homeButton" onClick={goToHomePage}>Home</button>
            <button className="saveButton">Save</button>
            <button className="helpButton">Help</button>
          </div>
        </header>
  
        <h1>Question 1</h1>
        <h2>This is a placeholder for detailed Question page, format to be done later</h2>
      </div>
    );
  };
  
  export default DetailedQuestion;
  