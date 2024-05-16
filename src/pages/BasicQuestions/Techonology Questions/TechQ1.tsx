import "../../Questions.css";
import React from 'react';

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const TechQ1: React.FC<Props> = ({handleAnswerSelect }) => {

  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
  };

  return (
    <div className='container'>
      <h1><strong>Technology Branch: Question 1</strong></h1>
      <h2>Which aspect of technology interests you the most?</h2>
      <div className="answerGrid">
        <button className="answerButton" style={{backgroundColor: "#a6e3a1"}} onClick={() => handleButtonClick("Software Engineering")}>Software Engineering</button>
        <button className="answerButton" style={{backgroundColor: "#cba6f7"}} onClick={() => handleButtonClick("Data Science and Analytics")}>Data Science and Analytics</button>
        <button className="answerButton" style={{backgroundColor: "#74c7ec"}} onClick={() => handleButtonClick("Cybersecurity")}>Cybersecurity</button>
        <button className="answerButton" style={{backgroundColor: "#f38ba8"}} onClick={() => handleButtonClick("Artificial Intelligence and Machine Learning")}>Artificial Intelligence and Machine Learning</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" style={{backgroundColor: "#f9e2af"}} onClick={() => handleButtonClick("IT Management")}>IT Management</button>
    </div>
  )
}
export default TechQ1;