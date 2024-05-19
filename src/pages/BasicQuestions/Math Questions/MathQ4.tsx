import React, { useState } from 'react';
import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const MathQ4: React.FC<Props> = ({handleAnswerSelect }) => {
  const [buttonSelected, setButtonSelected] = useState(0);
//Function to handle buttons, and communicate to other areas of the program which button was picked in order to record answer
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
    if (selectedString === "Yes") setButtonSelected(1);
    else if (selectedString === "No") setButtonSelected(2);
    else if (selectedString === "Somewhat") setButtonSelected(3);
  };
//Render the question and the four answer buttons
  return (
    <div className='container'>
      <h1><strong>Mathematics Branch: Question 4</strong></h1>
      <h2>Are you comfortable working with large datasets and applying mathematical algorithms for analysis?</h2>
      <div className="answerGrid">
        <button className="answerButton" disabled={buttonSelected===1} style={{backgroundColor: "#a6e3a1"}} onClick={() => handleButtonClick("Yes")}>Yes</button>
        <button className="answerButton" disabled={buttonSelected===2} style={{backgroundColor: "#cba6f7"}} onClick={() => handleButtonClick("No")}>No</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" disabled={buttonSelected===3} style={{backgroundColor: "#74c7ec"}} onClick={() => handleButtonClick("Somewhat")}>Somewhat</button>
    </div>
  )
}
export default MathQ4;