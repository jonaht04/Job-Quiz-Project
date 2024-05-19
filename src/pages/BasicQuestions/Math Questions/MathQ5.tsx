import React, { useState } from 'react';
import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const MathQ5: React.FC<Props> = ({handleAnswerSelect }) => {
  const [buttonSelected, setButtonSelected] = useState(0);
//Function to handle buttons, and communicate to other areas of the program which button was picked in order to record answer
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
    if (selectedString === "Data Analysis") setButtonSelected(1);
    else if (selectedString === "Financial Analysis") setButtonSelected(2);
  };
//Render the question and the four answer buttons
  return (
    <div className='container'>
      <h1><strong>Mathematics Branch: Question 5</strong></h1>
      <h2>Which type of role are you interested in?</h2>
      <div className="answerGrid">
      <button className="answerButton" disabled={buttonSelected===1} style={{backgroundColor: "#a6e3a1"}} onClick={() => handleButtonClick("Data Analysis")}>Data Analysis</button>
        <button className="answerButton" disabled={buttonSelected===2} style={{backgroundColor: "#cba6f7"}} onClick={() => handleButtonClick("Financial Analysis")}>Financial Analysis</button>
      </div>
    </div>
  )
}
export default MathQ5;