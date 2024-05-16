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
        <button className="answerButton" style={{backgroundColor: "#179299"}} onClick={() => handleButtonClick("Software Engineering")}>Software Engineering</button>
        <button className="answerButton" style={{backgroundColor: "#7287fd"}} onClick={() => handleButtonClick("Data Science and Analytics")}>Data Science and Analytics</button>
        <button className="answerButton" style={{backgroundColor: "#04a5e5"}} onClick={() => handleButtonClick("Cybersecurity")}>Cybersecurity</button>
        <button className="answerButton" style={{backgroundColor: "#e64553"}} onClick={() => handleButtonClick("Artificial Intelligence and Machine Learning")}>Artificial Intelligence and Machine Learning</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" style={{backgroundColor: "#ea76cb"}} onClick={() => handleButtonClick("IT Management")}>IT Management</button>
    </div>
  )
}
export default TechQ1;