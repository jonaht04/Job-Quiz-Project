import React, { useState } from 'react';
import "../../Questions.css";

interface Props {
  handleAnswerSelect: (selectedString: string) => void;
}

export const MathQ2: React.FC<Props> = ({handleAnswerSelect }) => {
  const [buttonSelected, setButtonSelected] = useState(0);
//Function to handle buttons, and communicate to other areas of the program which button was picked in order to record answer
  const handleButtonClick = (selectedString: string) => {
    handleAnswerSelect(selectedString);
    if (selectedString === "Education") setButtonSelected(1);
    else if (selectedString === "Industry") setButtonSelected(2);
    else if (selectedString === "Government") setButtonSelected(3);
  };
//Render the question and the four answer buttons
  return (
    <div className='container'>
      <h1><strong>Mathematics Branch: Question 2</strong></h1>
      <h2>In which sector are you interested in pursuing a career?</h2>
      <div className="answerGrid">
        <button className="answerButton" disabled={buttonSelected===1} style={{backgroundColor: "#a6e3a1"}} onClick={() => handleButtonClick("Education")}>Education</button>
        <button className="answerButton" disabled={buttonSelected===2} style={{backgroundColor: "#cba6f7"}} onClick={() => handleButtonClick("Industry")}>Industry</button>
      </div>
      <div className="spacer"></div>
      <button className="answerButton" disabled={buttonSelected===3} style={{backgroundColor: "#74c7ec"}} onClick={() => handleButtonClick("Government")}>Government</button>
    </div>
  )
}
export default MathQ2;