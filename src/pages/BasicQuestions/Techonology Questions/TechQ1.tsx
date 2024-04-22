import "../../Questions.css";
import React from 'react';

interface Props {
  handleAnswerSelect: () => void;
}

export const TechQ1: React.FC<Props> = ({ handleAnswerSelect }) => {
  return (
    <div className='container'>
      <h1><strong>Technology Branch: Question 1</strong></h1>
      <h2>Which aspect of technology interests you the most?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={handleAnswerSelect}>Software Engineering</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Data Science and Analytics</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Cybersecurity</button>
        <button className="answerButton" onClick={handleAnswerSelect}>Artificial Intelligence and Machine Learning</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton">IT Management</button>
    </div>
  )
}
export default TechQ1;