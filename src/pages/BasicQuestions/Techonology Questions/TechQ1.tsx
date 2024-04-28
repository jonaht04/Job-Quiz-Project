import "../../Questions.css";
import React from 'react';

interface Props {
  setSelectedString: (selectedString: string) => void;
  handleAnswerSelect: (selectedString: string) => void;
}

export const TechQ1: React.FC<Props> = ({ setSelectedString, handleAnswerSelect }) => {

  const handleButtonClick = (selectedString: string) => {
    setSelectedString(selectedString);
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Technology Branch: Question 1</strong></h1>
      <h2>Which aspect of technology interests you the most?</h2>
      <div className="answerGrid">
        <button className="answerButton" onClick={() => handleButtonClick("Software Engineering")}>Software Engineering</button>
        <button className="answerButton" onClick={() => handleButtonClick("Data Science and Analytics")}>Data Science and Analytics</button>
        <button className="answerButton" onClick={() => handleButtonClick("Cybersecurity")}>Cybersecurity</button>
        <button className="answerButton" onClick={() => handleButtonClick("Artificial Intelligence and Machine Learning")}>Artificial Intelligence and Machine Learning</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" onClick={() => handleButtonClick("IT Management")}>IT Management</button>
    </div>
  )
}
export default TechQ1;